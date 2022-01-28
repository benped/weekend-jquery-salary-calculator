$(readyNow);

function readyNow(){
    console.log('JS UP');
    $('#submitButton').on('click',intakeInfo);

}

function intakeInfo(){
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        salary: $('#salary').val(),
    }
 
    console.log(employee);
}