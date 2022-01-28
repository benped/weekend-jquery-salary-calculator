$(readyNow);

function readyNow(){
    console.log('JS UP');
    $('#submitButton').on('click',intakeInfo);

}

function intakeInfo(){
    let firstName = $('#firstName').val();
    console.log(firstName);
}