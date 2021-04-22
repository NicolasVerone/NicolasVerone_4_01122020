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
        nameError.innerHTML = "Ce champ doit être rempli si vous souhaitez vous inscrire";
        nameError.style.color = "orange";
        nameInput.style.border = "2px solid orange";
        return false;
    }
    // vérification si longueur de valeur insuffisante
    if (nameInput.value.length < 2) {
        nameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour ce champ";
        nameError.style.color = "orange"
        nameInput.style.border = "2px solid orange";
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!nameInputOk.test(nameInput.value)) {
        nameError.innerHTML = "Ce champ ne peut contenir que des lettres et des '-'";
        nameError.style.color = "red";
        nameInput.style.border = "2px solid red";
        return false;
    }
    // valeur OK
    nameError.innerHTML = "Merci, ce champ est correctement rempli !";
    nameError.style.color = "green";
    nameInput.style.border = "2px solid green";
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
        surnameError.innerHTML = "Ce champ doit être rempli si vous souhaitez vous inscrire";
        surnameError.style.color = "orange";
        surnameInput.style.border = "2px solid orange";
        return false;
    }
    // vérification si longueur de valeur insuffisante
    if (surnameInput.value.length < 2) {
        surnameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour ce champ";
        surnameError.style.color = "orange"
        surnameInput.style.border = "2px solid orange";
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!surnameInputOk.test(surnameInput.value)) {
        surnameError.innerHTML = "Ce champ ne peut contenir que des lettres et des '-'";
        surnameError.style.color = "red";
        surnameInput.style.border = "2px solid red";
        return false;
    }
    // valeur OK
    surnameError.innerHTML = "Merci, ce champ est correctement rempli !";
    surnameError.style.color = "green";
    surnameInput.style.border = "2px solid green";
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
        emailError.innerHTML = "Ce champ doit être rempli si vous souhaitez vous inscrire"
        emailError.style.color = "orange";
        emailInput.style.border = "2px solid orange";
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!emailInputOk.test(emailInput.value)) {
        emailError.innerHTML = "Ce champ doit contenir une adresse email valide";;
        emailError.style.color = "orange";
        emailInput.style.border = "2px solid orange";
        return false;
    }
    // valeur OK
    emailError.innerHTML = "Merci, ce champ est correctement rempli !";
    emailError.style.color = "green";
    emailInput.style.border = "2px solid green";
    return true;
}

// vérification du champ date de naissance
const birthdateFieldCheck = () => {
    const birthdateInput = document.getElementById("birthdate");
    birthdateInput.maxlength = 10;
    const birthdateError = document.getElementById("errorbirthdate");
    const birthdateFieldInputMax = "2003-05-01";
    const birthdateFieldInputMin = "1900-01-01";
    // vérification changement attribut du champ par l'utilisateur
    if (birthdateInput.type != "date") {
        birthdateInput.disabled = true;
        return false;
    }
    // vérification de l'âge de l'utlisateur (entre 01/01/1900 et 01/05/2003)
    if (birthdateInput.value.trim() === "") {
        birthdateError.innerHTML = "Vous devez entrer votre date de naissance";
        birthdateError.style.color = "orange";
        birthdateInput.style.border = "2px solid orange";
        return false;
    }
    if (birthdateInput.value >= birthdateFieldInputMax
        || birthdateInput.value < birthdateFieldInputMin) {
        birthdateError.innerHTML = "Votre date de naissance ne vous permet pas de vous inscrire";
        birthdateError.style.color = "orange";
        birthdateInput.style.border = "2px solid orange";
        return false;
    }
    if (birthdateInput.value.length > 10) {
        birthdateError.innerHTML = "Veuillez saisir une année valide";
        birthdateError.style.color = "red";
        birthdateInput.style.border = "2px solid red";
        return false;
    }
    // valeur OK
    birthdateError.innerHTML = "Merci, ce champ est correctement rempli !";
    birthdateError.style.color = "green";
    birthdateInput.style.border = "2px solid green";
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
        tournamentError.innerHTML = "Ce champ doit contenir une valeur comprise entre 0 et 6"
        tournamentError.style.color = "red";
        tournamentInput.style.border = "2px solid red";
        return false;
    }
    // vérification de l'absence de valeur entrée de l'utilisateur
    if (tournamentInput.value === "") {
        tournamentError.innerHTML = "Ce champ doit être rempli si vous souhaitez vous inscrire";
        tournamentError.style.color = "orange";
        tournamentInput.style.border = "2px solid orange";
        return false;
    }
    // valeur OK
    tournamentError.innerHTML = "Merci, ce champ est correctement rempli !";;
    tournamentError.style.color = "green";
    tournamentInput.style.border = "2px solid green";
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
        locationCheckBox[3].checked) {
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
    document.getElementById('form').action = "validation.html"
};

formInit();

