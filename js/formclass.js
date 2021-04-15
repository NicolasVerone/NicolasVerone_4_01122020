const formInit = () => {
    let allInputs = document.getElementsByClassName("text-control");
    let locationButton = document.getElementsByName("location");
    let checkboxTc = document.getElementById("checkbox1");
    let submitButton = document.getElementById("form");
    allInputs[0].addEventListener("input", () => {
        nameFieldCheck();
    });
    allInputs[1].addEventListener("input", () => {
        surnameFieldCheck();
    });
    allInputs[2].addEventListener("input", () => {
        emailFieldCheck();
    });
    allInputs[3].addEventListener("input", () => {
        birthdateFieldCheck();
    });

    allInputs[4].addEventListener("input", () => {
        tournamentFieldCheck();

    });
    locationButton.forEach((radio) => radio.addEventListener("click", () => {
        locationButtonCheck();

    }));

    checkboxTc.addEventListener("change", () => {
        checkboxTcCheck();
    });
    submitButton.addEventListener("submit", (event) => {
        formSubmission(event);
    });
};

let allInputs = document.getElementsByClassName("text-control");
let allErrors = document.getElementsByClassName("formError");
let fieldErrorTextMissing = "Ce champs doit être rempli si vous souhaitez vous inscrire";
let nameFieldInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
let nameFieldErrorTextShort = "Veuillez entrer 2 caractères ou plus pour ce champ";
let fieldErrorTextNotOk = "Ce champ ne doit contenir que des lettres et des '-'";
let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
let emailFieldErrorTextNotOk = "Ce champ doit contenir une adresse email valide";
let emailFieldInputOk = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
let birthdateFieldInputMax = "2003-05-01";
let birthdateFieldInputMin = "1900-01-01";
let birthdateFieldErrorTextNotOk = "Votre date de naissance ne vous permet pas de vous inscrire";;
let birthdateFieldErrorTextWrong = "Vous devez entrer votre date de naissance.";
let tournamentFieldErrorTextNotOk = "Ce champ doit contenir une valeur comprise entre 0 et 6"
let checkboxTc = document.getElementById("checkbox1");

const nameFieldCheck = () => {
    if (allInputs[0].type != "text") {
        nameFieldInput.disabled = true;
        return false;
    }
    if (allInputs[0].value.trim() === "") {
        allErrors[0].innerHTML = fieldErrorTextMissing;
        allErrors[0].style.color = "orange";
        return false;
    }
    if (allInputs[0].value.length < 2) {
        allErrors[0].innerHTML = nameFieldErrorTextShort;
        allErrors[0].style.color = "orange"
        return false;
    }
    if (!nameFieldInputOk.test(allInputs[0].value)) {
        allErrors[0].innerHTML = fieldErrorTextNotOk;
        allErrors[0].style.color = "red";
        return false;
    }
    allErrors[0].innerHTML = fieldErrorTextOk;
    allErrors[0].style.color = "green";
    return true
}

const surnameFieldCheck = () => {
    if (allInputs[1].type != "text") {
        surnameFieldInput.disabled = true;
        return false;
    }
    if (allInputs[1].value.trim() === "") {
        allErrors[1].innerHTML = fieldErrorTextMissing;
        allErrors[1].style.color = "orange";
        return false;
    }
    if (allInputs[1].value.length < 2) {
        allErrors[1].innerHTML = nameFieldErrorTextShort;
        allErrors[1].style.color = "orange"
        return false;
    }
    if (!nameFieldInputOk.test(allInputs[1].value)) {
        allErrors[1].innerHTML = fieldErrorTextNotOk;
        allErrors[1].style.color = "red";
        return false;
    }
    allErrors[1].innerHTML = fieldErrorTextOk;
    allErrors[1].style.color = "green";
    return true
}

const emailFieldCheck = () => {
    if (allInputs[2].type != "email") {
        allInputs[2].disabled = true;
        return false;
    }
    if (allInputs[2].value.trim() === "") {
        allErrors[2].innerHTML = fieldErrorTextMissing
        allErrors[2].style.color = "orange";
        return false;
    }
    if (!emailFieldInputOk.test(allInputs[2].value)) {
        allErrors[2].innerHTML = emailFieldErrorTextNotOk;
        allErrors[2].style.color = "orange";
        return false;
    }
    allErrors[2].innerHTML = fieldErrorTextOk;
    allErrors[2].style.color = "green";
    return true;
}

const birthdateFieldCheck = () => {
    if (allInputs[3].type != "date") {
        allInputs[3].disabled = true;
        return false;
    }
    if (allInputs[3].value > birthdateFieldInputMax || allInputs[3].value < birthdateFieldInputMin) {
        allErrors[3].innerHTML = birthdateFieldErrorTextNotOk;
        allErrors[3].style.color = "orange";
        return false;
    }
    if (allInputs[3].value.length != 10) {
        allErrors[3].innerHTML = birthdateFieldErrorTextWrong;
        allErrors[3].style.color = "red";
        return false;
    }

    allErrors[3].innerHTML = fieldErrorTextOk;
    allErrors[3].style.color = "green";
    return true;
}

const tournamentFieldCheck = () => {
    ;
    if (allInputs[4].type !== "number") {
        allInputs[4].disabled = true;
        return false;
    }
    if (allInputs[4].value < 0 || allInputs[4].value > 6) {
        allErrors[4].innerHTML = tournamentFieldErrorTextNotOk;
        allErrors[4].style.color = "red";
        return false;
    }
    if (allInputs[4].value === "") {
        allErrors[4].innerHTML = fieldErrorTextMissing;
        allErrors[4].style.color = "orange";
        return false;
    }
    allErrors[4].innerHTML = fieldErrorTextOk;
    allErrors[4].style.color = "green";
    return true;
}

const locationButtonCheck = () => {
    let locationCheckBox = document.getElementsByName("location");
    let locationCheckBoxErrorOk = "Merci pour votre réponse";
    for (let i = 0; i < locationCheckBox.length; i++) {
        if (locationCheckBox[i].checked) {
            allErrors[5].innerHTML = locationCheckBoxErrorOk;
            allErrors[5].style.color = "green";
            return true;
        }
    }
}

const checkboxTcCheck = () => {
    if (!checkboxTc.checked) {
        allErrors[6].innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
        allErrors[6].style.color = 'orange';
        return false;
    }
    allErrors[6].innerHTML = "";
    return true;
}

const formSubmission = (event) => {
    let errorSubmit = document.getElementById("messagesubmit");
    let locationCheckBoxError = document.getElementById("errorlocation");
    let errorSubmitMessage = () => { errorSubmit.innerHTML = "Veuilez remplir tous les champs pour valider votre inscription" };

    if (nameFieldCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    }
    if (surnameFieldCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    };
    if (emailFieldCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    }
    if (birthdateFieldCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    }
    if (tournamentFieldCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    }
    if (locationButtonCheck() !== true) {
        locationCheckBoxError.innerHTML = "Vous devez choisir une option";
        locationCheckBoxError.style.color = "orange";
        errorSubmitMessage();
        event.preventDefault();
    }
    if (checkboxTcCheck() !== true) {
        errorSubmitMessage();
        event.preventDefault();
    }
    location.href = "validation.html";
};

formInit();
