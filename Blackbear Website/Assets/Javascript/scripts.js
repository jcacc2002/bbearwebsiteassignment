function clearForm(){
    document.getElementById("errors-content").innerHTML = "";
    document.getElementById('errors').classList.remove('d-block');
    document.getElementById('errors').classList.add('d-none');
}

function validateForm(){

    clearForm();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var errors = "";

    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(message)){
        errors += "<li>Please fill in all fields.</li>";
    }

    if (isShort(message)){
        errors += "<li>Line may be too short. Please provide more details.</li>";
    }

    if (errors != ""){
        document.getElementById("errors-content").innerHTML = "<ul class='errors-list'>"+errors+"</ul>";
        document.getElementById('errors').classList.remove('d-none');
        document.getElementById('errors').classList.add('d-block');
        return false;
    }
    else {
        return true;
    }
}

function isEmpty(field){
    if(field == ""){
        return true;
    }
    else{
        return false;
    }
}

function isShort(field){
    if(field.length < 20){
        return true;
    }
    else{
        return false;
    }
}