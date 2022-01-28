$(readyNow);
let salaryDollar = 0;

function readyNow(){
    
    console.log('JS UP');
    $('#submitButton').on('click',salaryTotal, intakeInfo);
    // $('#submitButton').on('click',salaryTotal);
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