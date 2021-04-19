// fonction d'initialisation de l'ensemble du code

const formInit = () => { 

    // déclaration des fonctions  permettant de vérifier les actions de l'utilisateur
    let allInputs = document.getElementsByClassName("text-control");
    let locationButton = document.getElementsByName("location");
    let checkboxTc = document.getElementById("checkbox1");
    let submitButton = document.getElementById("form");

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
    let allInputs = document.getElementsByClassName("text-control");
    let allErrors = document.getElementsByClassName("formError");
    let fieldErrorTextMissing = "Ce champ doit être rempli si vous souhaitez vous inscrire";
    let nameFieldInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
    let nameFieldErrorTextShort = "Veuillez entrer 2 caractères ou plus pour ce champ";
    let fieldErrorTextNotOk = "Ce champ ne doit contenir que des lettres et des '-'";
    let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
    // vérification changement attribut du champ par l'utilisateur
    if (allInputs[0].type != "text") {
        allInputs[0].disabled = true;
        return false;
    }

    // vérification valeur vide
    if (allInputs[0].value.trim() === "") {
        allErrors[0].innerHTML = fieldErrorTextMissing;
        allErrors[0].style.color = "orange";
        return false;
    }

    // vérification si longueur de valeur insuffisante
    if (allInputs[0].value.length < 2) {
        allErrors[0].innerHTML = nameFieldErrorTextShort;
        allErrors[0].style.color = "orange"
        return false;
    }

    // vérification si valeur correpond à la regex servant de référence
    if (!nameFieldInputOk.test(allInputs[0].value)) {
        allErrors[0].innerHTML = fieldErrorTextNotOk;
        allErrors[0].style.color = "red";
        return false;
    }

    // valeur OK
    allErrors[0].innerHTML = fieldErrorTextOk;
    allErrors[0].style.color = "green";
    return true
}

// fonction vérification champ prénom
const surnameFieldCheck = () => {
    let allInputs = document.getElementsByClassName("text-control");
    let allErrors = document.getElementsByClassName("formError");
    let fieldErrorTextMissing = "Ce champ doit être rempli si vous souhaitez vous inscrire";
    let nameFieldInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
    let nameFieldErrorTextShort = "Veuillez entrer 2 caractères ou plus pour ce champ";
    let fieldErrorTextNotOk = "Ce champ ne doit contenir que des lettres et des '-'";
    let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
    // vérification changement attribut du champ par l'utilisateur
    if (allInputs[1].type != "text") {
        surnameFieldInput.disabled = true;
        return false;
    }
    // vérification valeur vide
    if (allInputs[1].value.trim() === "") {
        allErrors[1].innerHTML = fieldErrorTextMissing;
        allErrors[1].style.color = "orange";
        return false;
    }
    // vérification si longueur de valeur insuffisante
    if (allInputs[1].value.length < 2) {
        allErrors[1].innerHTML = nameFieldErrorTextShort;
        allErrors[1].style.color = "orange"
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!nameFieldInputOk.test(allInputs[1].value)) {
        allErrors[1].innerHTML = fieldErrorTextNotOk;
        allErrors[1].style.color = "red";
        return false;
    }
    // valeur OK
    allErrors[1].innerHTML = fieldErrorTextOk;
    allErrors[1].style.color = "green";
    return true
}

// fonction vérification champ email
const emailFieldCheck = () => {
    let allInputs = document.getElementsByClassName("text-control");
    let allErrors = document.getElementsByClassName("formError");
    let fieldErrorTextMissing = "Ce champ doit être rempli si vous souhaitez vous inscrire";
    let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
    let emailFieldErrorTextNotOk = "Ce champ doit contenir une adresse email valide";
    let emailFieldInputOk = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
    // vérification changement attribut du champ par l'utilisateur
    if (allInputs[2].type != "email") {
        allInputs[2].disabled = true;
        return false;
    }
    // vérification valeur vide
    if (allInputs[2].value.trim() === "") {
        allErrors[2].innerHTML = fieldErrorTextMissing
        allErrors[2].style.color = "orange";
        return false;
    }
    // vérification si valeur correpond à la regex servant de référence
    if (!emailFieldInputOk.test(allInputs[2].value)) {
        allErrors[2].innerHTML = emailFieldErrorTextNotOk;
        allErrors[2].style.color = "orange";
        return false;
    }
    // valeur OK
    allErrors[2].innerHTML = fieldErrorTextOk;
    allErrors[2].style.color = "green";
    return true;
}

// vérification du champ date de naissance
const birthdateFieldCheck = () => {
let allInputs = document.getElementsByClassName("text-control");
let allErrors = document.getElementsByClassName("formError");
  let birthdateFieldErrorTextNotOk = "Votre date de naissance ne vous permet pas de vous inscrire";;
  let fieldErrorTextMissingBirthdate = "Vous devez entrer votre date de naissance";
  let birthdateFieldErrorTextWrong = "Veuillez saisir une année valide";
  let birthdateFieldInputMax = "2003-05-01";
  let birthdateFieldInputMin = "1900-01-01";
  let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
  allInputs[3].maxlength = 10;
      // vérification changement attribut du champ par l'utilisateur
      if (allInputs[3].type != "date") {
          allInputs[3].disabled = true;
          return false;
      }

      if (allInputs[3].value.trim() === "") {
        allErrors[3].innerHTML = fieldErrorTextMissingBirthdate
        allErrors[3].style.color = "orange";
        return false;
    }



      // vérification de l'âge de l'utlisateur (entre 01/01/1900 et 01/05/2003)
      if (allInputs[3].value >= birthdateFieldInputMax || allInputs[3].value < birthdateFieldInputMin) {
              allErrors[3].innerHTML = birthdateFieldErrorTextNotOk;
              allErrors[3].style.color = "red";
              return false;
      }

      if (allInputs[3].value.length >10) {
          allErrors[3].innerHTML = birthdateFieldErrorTextWrong;
          allErrors[3].style.color = "orange";
          return false;
      }
  
     
  
      // valeur OK
      allErrors[3].innerHTML = fieldErrorTextOk;
      allErrors[3].style.color = "green";
      return true;
  }
// vérification du champ nombre de tournois
const tournamentFieldCheck = () => {
    let allInputs = document.getElementsByClassName("text-control");
    let allErrors = document.getElementsByClassName("formError");
    let tournamentFieldErrorTextNotOk = "Ce champ doit contenir une valeur comprise entre 0 et 6"
    let fieldErrorTextOk = "Merci, ce champ est correctement rempli !";
    let fieldErrorTextMissing = "Ce champ doit être rempli si vous souhaitez vous inscrire";
    // vérification changement attribut du champ par l'utilisateur
    if (allInputs[4].type !== "number") {
        allInputs[4].disabled = true;
        return false;
    }
    // vérification de la valeur entrée par l'utilsateur (entre 0 et 6)
    if (allInputs[4].value < 0 || allInputs[4].value > 6) {
        allErrors[4].innerHTML = tournamentFieldErrorTextNotOk;
        allErrors[4].style.color = "red";
        return false;
    }
    // vérification de l'absence de valeur entrée de l'utilisateur
    if (allInputs[4].value === "") {
        allErrors[4].innerHTML = fieldErrorTextMissing;
        allErrors[4].style.color = "orange";
        return false;
    }
    // valeur OK
    allErrors[4].innerHTML = fieldErrorTextOk;
    allErrors[4].style.color = "green";
    return true;
}
// vérification des boutons radios ville
const locationButtonCheck = () => {
    let locationCheckBox = document.getElementsByName("location");
    let locationCheckBoxErrorOk = "Merci pour votre réponse";
    let allErrors = document.getElementsByClassName("formError");

    // création d'une boucle vérifiant si un des boutons radio est coché
    for (let i = 0; i < locationCheckBox.length; i++) {
        if (locationCheckBox[i].checked) {
            allErrors[5].innerHTML = locationCheckBoxErrorOk;
            allErrors[5].style.color = "green";
            return true;
        }
      // bouton bien cochée 
    }return false;
}

// vérification ddes conditions générales bien cochés
const checkboxTcCheck = () => {
    let checkboxTc = document.getElementById("checkbox1");
    let allErrors = document.getElementsByClassName("formError");
    // si les conditions générales ne sont pas cochées
    if (!checkboxTc.checked) {
        allErrors[6].innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
        allErrors[6].style.color = 'orange';
        return false;
    }
    // si OK
    allErrors[6].innerHTML = " ";
    return true;
    
}// Fonction validation du formulaire
const formSubmission = (event) => {
    let errorSubmit = document.getElementById("messagesubmit");
    let locationCheckBoxError = () => {locationCheckBox.innerHTML ="Vous devez choisir une option" };
    const locationCheckBox = document.getElementById("errorlocation");
    errorSubmit.style.color = 'orange';
    let errorSubmitMessage = () => { errorSubmit.innerHTML = "Veuillez remplir tous les champs pour valider votre inscription" };

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
    location.href = "validation.html";
};

formInit();

