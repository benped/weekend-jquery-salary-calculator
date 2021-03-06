$(readyNow);
let salaryDollar = 0;

function readyNow(){
    
    console.log('JS UP');
    // Listening for new data submitted 
    $('#submitButton').click(submitFunctions);
    
    // Listening for Delete
    $('#salaryTable').on('click', '.delete', deleteRow);
}

// submit Functions work to check information before it is passed to 
// total salary table and added to the table
//Empty checker turned off to make debugging easier
function submitFunctions(){
    if(emptyChecker()==true){
        alert("Please fill out all boxes!");
        return false;
    }
    if(numberChecker()==false){
        alert("Salary needs to be a number!")
        return false;
    };
    salaryTotal();
    intakeInfo();
// }
}

function intakeInfo(){

    // PUT ALL INPUTS INTO AN employee OBJECT
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        salary: $('#salary').val(),
    }
    // CLEAR INPUTS 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#salary').val('');
        // End clear Inputs

    // Append Data to the DOM
    $('#salaryTable').append(`<tr><td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.ID}</td>
    <td>${employee.title}</td>
    <td id="salaryDatum">${accounting.formatMoney(employee.salary)}</td>
    <td><button class="delete">Delete</button></td></tr>`)
        // End table data appended to DOM


    console.log(employee);
}

// Calculates and pushes total salary to DOM - working
function salaryTotal(){
    salaryDollar += (accounting.unformat($('#salary').val()))/12;
    $('#runningTotal').text(accounting.formatMoney(salaryDollar));
        // Makes background red if over 20K 
    if (salaryDollar > 20000){
        $('#salaryTotalDiv').addClass('redBackground')
    }

}

// Checks if any field is empty and throws a false if they are
function emptyChecker(){
    if ($('#firstName').val()===''||
    $('#lastName').val()===''||
    $('#ID').val()===''||
    $('#title').val()===''||
    $('#salary').val()===''){
        // alert("Hello! I am an alert box!!");
        return true;
    }
}

// DELETES ROW AND MOVES TOTAL DOWN
function deleteRow(){
    console.log('this is', $(this));
    // remove the block
    
    console.log(salaryDollar);
    // console.log($(this,'#salaryDatum').text());
    // $(this).parents("tr").remove();
    salaryDollar -= (Number(accounting.unformat($(this).parents("tr").children("#salaryDatum").text())))/12;
    console.log(salaryDollar);
    $('#runningTotal').text(accounting.formatMoney(salaryDollar));
    $(this).parents("tr").remove();
    if (salaryDollar <= 20000){
        $('#salaryTotalDiv').removeClass('redBackground')
    }
}

function numberChecker(){
    if (isNaN($('#salary').val())){
        console.log('NOT A NUMBER?',$('#salary').val())
        return false;
    }
};
