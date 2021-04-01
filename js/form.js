const formInit = () => {



    let nameFieldInput = document.getElementById("first");
    let surnameFieldInput = document.getElementById("last");
    let emailFieldInput = document.getElementById("email");
    let birthdateFieldInput = document.getElementById("birthdate");
    let tournamentFieldInput = document.getElementById("quantity");
    let submitButton = document.getElementById("submitbutton");

    nameFieldInput.addEventListener("input", () => { nameFieldCheck() });
    surnameFieldInput.addEventListener("input", () => { surnameFieldCheck() });
    emailFieldInput.addEventListener("input", () => { emailFieldCheck() });
    birthdateFieldInput.addEventListener("change", () => { birthdateFieldCheck() });
    tournamentFieldInput.addEventListener("input", () => { tournamentFieldCheck() });
    submitButton.addEventListener("submit", () => { confirmationSubmission });


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
        emailFieldError.innerHTML = "Ce champs doit contenir une adresse email valide"
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
};

const tournamentFieldCheck = () => {
    let tournamentFieldInput = document.getElementById("quantity");
    let tournamentFieldError = document.getElementById("errorquantity");

    if ((tournamentFieldInput.value < 0) || (tournamentFieldInput.value > 6)) {
        tournamentFieldError.innerHTML = "Ce champs doit contenir une valeur comprise entre 0 et 6";
        tournamentFieldError.style.color = 'red';
    }

    else if (((tournamentFieldInput.value >= 0) && (tournamentFieldInput.value <= 6)) == true) {
        tournamentFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
        tournamentFieldError.style.color = 'green';
    }
};

const confirmationSubmission = () => {
    const formContainer = document.getElementsByClassName('content');
    const formBody = document.getElementsByClassName('modal-body');
    const formConfirmation = document.createElement("div");
    formContainer.appendChild(formConfirmation);
    confirmationSubmission.preventDefault();
        ((surnameFieldCheck = true) &&
        (emailFieldCheck = true) &&
        (birthdateFieldCheck = true) &&
        (tournamentFieldCheck = true))
        {
        (formContainer.replaceChild (formConfirmation, formBody))}
};


formInit();