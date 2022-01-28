$(readyNow);
let salaryDollar = 0;

function readyNow(){
    
    console.log('JS UP');
    $('#submitButton').click(submitFunctions);
    // $('#submitButton').on('click',salaryTotal);
}

// submit Functions work to check information before it is passed to 
// total salary table and added to the table
//Empty checker turned off to make debugging easier
function submitFunctions(){
    // if(emptyChecker()==true){
    //     alert("Please fill out all boxes!");
    //     return false;
    // } else {
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
    <td>${employee.salary}</td></tr>`)
        // End table data appended to DOM


    console.log(employee);
}

// Calculates and pushes total salary to DOM - working
function salaryTotal(){
    salaryDollar += Number($('#salary').val());
    $('#runningTotal').text(salaryDollar);
}

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