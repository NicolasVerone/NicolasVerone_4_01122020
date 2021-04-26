// fonction d'initialisation de l'ensemble du code

const formInit = () => {

    // déclaration des fonctions  permettant de vérifier les actions de l'utilisateur
    const allInputs = document.getElementsByClassName("text-control");
    const locationButton = document.getElementsByName("location");
    const checkboxTc = document.getElementById("checkbox1");
    const submitButton = document.getElementById("form");

    // appel des fonctions callbacks
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

const showMessage = (labelError, formInput, messageLabelError, colorLabelError, borderFormInput) => {
    labelError.innerHTML = messageLabelError;
    labelError.style.color = colorLabelError;
    formInput.style.border = borderFormInput;
}


// fonction vérification champ prénom
const nameFieldCheck = () => {
    const nameInput = document.getElementById("first");
    const nameInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
    const nameError = document.getElementById("errorfirst");
    // vérification changement attribut du champ par l'utilisateur
    if (nameInput.type != "text") {
        nameInput.disabled = true;
        return false;
    }
    // vérification valeur vide
    if (nameInput.value.trim() === "") {
        showMessage(nameError, nameInput, "Ce champ doit être rempli si vous souhaitez vous inscrire",
            "orange", "2px solid orange")
        return false;
    }
    // vérification si longueur de valeur insuffisante
    if (nameInput.value.length < 2) {
        showMessage(nameError, nameInput, "Veuillez entrer 2 caractères ou plus pour ce champ",
            "orange", "2px solid orange")
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!nameInputOk.test(nameInput.value)) {
        showMessage(nameError, nameInput, "Ce champ ne peut contenir que des lettres et des '-'",
            "red", "2px solid red");
        return false;
    }
    // valeur OK
    showMessage(nameError, nameInput, "Merci, ce champ est correctement rempli !",
        "green", "2px solid green");
    return true
}

// fonction vérification champ prénom
const surnameFieldCheck = () => {
    const surnameInput = document.getElementById("last");
    const surnameInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
    const surnameError = document.getElementById("errorlast");
    // vérification changement attribut du champ par l'utilisateur
    if (surnameInput.type != "text") {
        surnameInput.disabled = true;
        surnameInput.style.border = "2px solid orange";
        return false;
    }
    // vérification valeur vide
    if (surnameInput.value.trim() === "") {
        showMessage(surnameError, surnameInput, "Ce champ doit être rempli si vous souhaitez vous inscrire",
            "orange", "2px solid orange");
        return false;
    }
    // vérification si longueur de valeur insuffisante
    if (surnameInput.value.length < 2) {
        showMessage(surnameError, surnameInput, "Veuillez entrer 2 caractères ou plus pour ce champ",
            "orange", "2px solid orange");
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!surnameInputOk.test(surnameInput.value)) {
        showMessage(surnameError, surnameInput, "Ce champ ne peut contenir que des lettres et des '-'",
            "red", "2px solid red");
        return false;
    }
    // valeur OK
    showMessage(surnameError, surnameInput, "Merci, ce champ est correctement rempli !",
        "green", "2px solid green");
    return true
}


// fonction vérification champ email
const emailFieldCheck = () => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("erroremail");
    const emailInputOk = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
    // vérification changement attribut du champ par l'utilisateur
    if (emailInput.type != "email") {
        emailInput.disabled = true;
        return false;
    }
    // vérification valeur vide
    if (emailInput.value.trim() === "") {
        showMessage(emailError, emailInput, "Ce champ doit être rempli si vous souhaitez vous inscrire",
            "orange", "2px solid orange")
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!emailInputOk.test(emailInput.value)) {
        showMessage(emailError, emailInput, "Ce champ doit contenir une adresse email valide",
            "orange", "2px solid orange")
        return false;
    }
    // valeur OK
    showMessage(emailError, emailInput, "Merci, ce champ est correctement rempli !",
        "green", "2px solid green")
    return true;
}

// vérification du champ date de naissance
const birthdateFieldCheck = () => {
    const birthdateInput = document.getElementById("birthdate");
    birthdateInput.maxlength = 10;
    const birthdateError = document.getElementById("errorbirthdate");
    // Dates de naissances minimum et maximum de la personne souhaitant s'inscrire
    const birthdateFieldInputMax = "2003-05-01";
    const birthdateFieldInputMin = "1900-01-01";
    // vérification changement attribut du champ par l'utilisateur
    if (birthdateInput.type != "date") {
        birthdateInput.disabled = true;
        return false;
    }
    // vérification de l'âge de l'utlisateur (entre 01/01/1900 et 01/05/2003)
    if (birthdateInput.value.trim() === "") {
        showMessage(birthdateError, birthdateInput, "Ce champ doit être rempli si vous souhaitez vous inscrire",
            "orange", "2px solid orange")
        return false;
    }
    if (birthdateInput.value >= birthdateFieldInputMax
        || birthdateInput.value < birthdateFieldInputMin) {
        showMessage(birthdateError, birthdateInput, "Votre date de naissance ne vous permet pas de votre inscrire",
            "orange", "2px solid orange")
        return false;
    }
    if (birthdateInput.value.length > 10) {
        showMessage(birthdateError, birthdateInput, "Veuillez remplir ce champ avec une année valide",
            "red", "2px solid red")
        return false;
    }
    // valeur OK
    showMessage(birthdateError, birthdateInput, "Merci, ce champ est correctement rempli !",
        "green", "2px solid green")
    return true;
}

// vérification du champ nombre de tournois
const tournamentFieldCheck = () => {
    const tournamentInput = document.getElementById("quantity");
    const tournamentError = document.getElementById("errorquantity");
    // vérification changement attribut du champ par l'utilisateur
    if (tournamentInput.type !== "number") {
        tournamentInput.disabled = true;
        return false;
    }
    // vérification de la valeur entrée par l'utilsateur (entre 0 et 6)
    if (tournamentInput.value < 0 || tournamentInput.value > 6) {
        showMessage(tournamentError, tournamentInput, "Ce champ doit contenir une valeur comprise entre 0 et 6",
            "red", "2px solid red");
        return false;
    }
    // vérification de l'absence de valeur entrée de l'utilisateur
    if (tournamentInput.value === "") {
        showMessage(tournamentError, tournamentInput, "Ce champ doit être rempli si vous souhaitez vous inscrire",
            "orange", "2px solid orange");
        return false;
    }
    // valeur OK
    showMessage(tournamentError, tournamentInput, "Mecri, ce champ est correctement rempli !",
        "green", "2px solid green");
    return true;
}

// vérification des boutons radios ville
const locationButtonCheck = () => {
    const locationCheckBox = document.getElementsByName("location");
    const locationError = document.getElementById("errorlocation");
    // ccondition si l'un des boutons est coché
    if (locationCheckBox[0].checked ||
        locationCheckBox[1].checked ||
        locationCheckBox[2].checked ||
        locationCheckBox[3].checked ||
        locationCheckBox[4].checked ||
        locationCheckBox[5].checked) {
        locationError.innerHTML = "Merci pour votre réponse !";
        locationError.style.color = "green";
        return true
    }
}

// vérification ddes conditions générales bien cochés
const checkboxTcCheck = () => {
    const checkboxTc = document.getElementById("checkbox1");
    const checkboxTcError = document.getElementById("errorcheckbox");
    // si les conditions générales ne sont pas cochées
    if (!checkboxTc.checked) {
        checkboxTcError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
        checkboxTcError.style.color = 'orange';
        return false;
    }
    // si OK
    checkboxTcError.innerHTML = " ";
    return true;
}
// Fonction validation du formulaire
const formSubmission = (event) => {
    const errorSubmit = document.getElementById("messagesubmit");
    errorSubmit.style.color = 'orange';
    const locationCheckBox = document.getElementById("errorlocation");
    const locationCheckBoxError = () => { locationCheckBox.innerHTML = "Vous devez choisir une option" };
    const errorSubmitMessage = () => { errorSubmit.innerHTML = "Veuillez remplir tous les champs pour valider votre inscription" };

    if (nameFieldCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    }
    if (surnameFieldCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    };
    if (emailFieldCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    }
    if (birthdateFieldCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    }
    if (tournamentFieldCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    }
    if (locationButtonCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        locationCheckBox.style.color = "orange";
        locationCheckBoxError();
        return false;
    }
    if (checkboxTcCheck() !== true) {
        event.preventDefault();
        errorSubmitMessage();
        return false;
    }
    document.getElementById('form').action = "confirmation.html"
}
formInit();

