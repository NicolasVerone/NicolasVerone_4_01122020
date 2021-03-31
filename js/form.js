const formInit = () => {

    let nameFieldInput = document.getElementById("first");
    let surnameFieldInput = document.getElementById("last");
    let emailFieldInput = document.getElementById("email");
    let birthdateFieldInput = document.getElementById("birthdate");

    nameFieldInput.addEventListener("input", () => { nameFieldCheck() });
    surnameFieldInput.addEventListener("input", () => { surnameFieldCheck() });
    emailFieldInput.addEventListener("input", () => { emailFieldCheck() });
    birthdateFieldInput.addEventListener("change", () => { birthdateFieldCheck() });


};

const nameFieldCheck = () => {

    let nameFieldInput = document.getElementById("first");
    let nameFieldInputOk = /^[a-zA-Z-\s]+$/;
    let nameFieldError = document.getElementById("errorfisrt");

    if (nameFieldInput.value == "") {
        nameFieldError.innerHTML = "Ce champs doit être rempli si vous souhaitez vous inscrire"
        nameFieldError.style.color = 'orange';
    }
    else if (nameFieldInputOk.test(nameFieldInput.value) == false) {
        nameFieldError.innerHTML = "Ce champs ne doit contenir que des lettres et des '-' "
        nameFieldError.style.color = 'red';
    }

    else if (nameFieldInputOk.test(nameFieldInput.value) == true) {
        nameFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
        nameFieldError.style.color = 'green';

    }
};


const surnameFieldCheck = () => {


    let surnameFieldInput = document.getElementById("last");
    let surnameFieldInputOk = /^[a-zA-Z-\s]+$/;
    let surnameFieldError = document.getElementById("errorlast");

    if (surnameFieldInput.value == "") {
        surnameFieldError.innerHTML = "Ce champs doit être rempli si vous souhaitez vous inscrire"
        surnameFieldError.style.color = 'orange';
    }
    else if (surnameFieldInputOk.test(surnameFieldInput.value) == false) {
        surnameFieldError.innerHTML = "Ce champs ne doit contenir que des lettres et des -"
        surnameFieldError.style.color = 'red';
    }

    else if (surnameFieldInputOk.test(surnameFieldInput.value) == true) {
        surnameFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
        surnameFieldError.style.color = 'green';

    }
};


const emailFieldCheck = () => {
    let emailFieldInput = document.getElementById("email");
    let emailFieldError = document.getElementById("erroremail");

    if (emailFieldInput.value == "") {
        emailFieldError.innerHTML = "Ce champs doit être rempli si vous souhaitez vous inscrire"
        emailFieldError.style.color = 'orange';
    }
};

const birthdateFieldCheck = () => {
    let birthdateFieldInput = document.getElementById("birthdate");
    let birthdateFieldInputMax = document.getElementById("birthdate").max;
    let birthdateFieldError = document.getElementById("errorbirthdate");


    if ((birthdateFieldInput.value < birthdateFieldInputMax) == true) {
        birthdateFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
        birthdateFieldError.style.color = 'green';
    }



}


formInit();