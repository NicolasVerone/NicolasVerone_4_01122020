const formInit = () => {




  let nameFieldInput = document.getElementById("first");
  let surnameFieldInput = document.getElementById("last");
  let emailFieldInput = document.getElementById("email");
  let birthdateFieldInput = document.getElementById("birthdate");
  let tournamentFieldInput = document.getElementById("quantity");
  let checkboxTc = document.getElementById("checkbox1");
  let submitButton = document.getElementById("form");


  nameFieldInput.addEventListener("input", () => {
    nameFieldCheck();
  });
  surnameFieldInput.addEventListener("input", () => {
    surnameFieldCheck();
  });
  emailFieldInput.addEventListener("input", () => {
    emailFieldCheck();
  });
  birthdateFieldInput.addEventListener("input", () => {
    birthdateFieldCheck();
  });
  birthdateFieldInput.addEventListener("blur", () => {
    birthdateFieldCheck();
  });
  tournamentFieldInput.addEventListener("input", () => {
    tournamentFieldCheck();
  });
  checkboxTc.addEventListener("change", () => {
    checkboxTcCheck();
  });
  submitButton.addEventListener("submit", () => {
    formSubmission();
  });
};

const nameFieldCheck = () => {
  let nameFieldInput = document.getElementById("first");
  let nameFieldInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
  let nameFieldError = document.getElementById("errorfisrt");


  if (nameFieldInput.type != "text") 
  {
    nameFieldInput.disabled = true;
  return false}

  else if (nameFieldInput.value.length < 2) {
    nameFieldError.innerHTML = "Ce champ doit contenir au moins deux lettres";
    nameFieldError.style.color = "orange";
    return false;
  }
  else if (nameFieldInput.value.trim() === "") {
    nameFieldError.innerHTML =
      "Ce champs doit être rempli si vous souhaitez vous inscrire";
    nameFieldError.style.color = "orange";
    return false;

  } else if (!nameFieldInputOk.test(nameFieldInput.value)) {
    nameFieldError.innerHTML =
      "Ce champs ne doit contenir que des lettres et des '-' ";
    nameFieldError.style.color = "red";
    return false;

  } else if (nameFieldInputOk.test(nameFieldInput.value)) {
    nameFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
    nameFieldError.style.color = "green";
    return true;
  }
};

const surnameFieldCheck = () => {
  let surnameFieldInput = document.getElementById("last");
  let surnameFieldInputOk = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/;
  let surnameFieldError = document.getElementById("errorlast");
  if (surnameFieldInput.type != "text") 
  {
    surnameFieldInput.disabled = true;
  return false}
  if (surnameFieldInput.value.length < 2) {
    surnameFieldError.innerHTML = "Ce champ doit contenir au moins deux lettres";
    surnameFieldError.style.color = "orange";
    return false;
  } else if (surnameFieldInput.value.trim() === "") {
    surnameFieldError.innerHTML = "Ce champs doit être rempli si vous souhaitez vous inscrire";
    surnameFieldError.style.color = "orange";
    return false;
  } else if (!surnameFieldInputOk.test(surnameFieldInput.value)) {
    surnameFieldError.innerHTML = "Ce champs ne doit contenir que des lettres et des '-' ";
    surnameFieldError.style.color = "red";
    return false;
  } else if (surnameFieldInputOk.test(surnameFieldInput.value)) {
    surnameFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
    surnameFieldError.style.color = "green";
    return true;
  }
};

const emailFieldCheck = () => {
  let emailFieldInput = document.getElementById("email");
  let emailFieldInputOk = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/;
  let emailFieldError = document.getElementById("erroremail");


  if (emailFieldInput.type != "email") 
  {
    emailFieldInput.disabled = true;
  return false}
  if (emailFieldInput.value.trim() === "") {
    emailFieldError.innerHTML =
      "Ce champs doit être rempli si vous souhaitez vous inscrire";
    emailFieldError.style.color = "orange";
    return false;
  } else if (!emailFieldInputOk.test(emailFieldInput.value)) {
    emailFieldError.innerHTML =
      "Ce champs doit contenir une adresse email valide";
    emailFieldError.style.color = "orange";
    return false;
  } else if (emailFieldInputOk.test(emailFieldInput.value)) {
    emailFieldError.innerHTML = "Merci, ce champs est correctement rempli !";
    emailFieldError.style.color = "green";
    return true;
  }
};

const birthdateFieldCheck = () => {
  let birthdateFieldInput = document.getElementById("birthdate");
  let birthdateFieldInputMax = document.getElementById("birthdate").max;
  let birthdateFieldError = document.getElementById("errorbirthdate");
  
  if (birthdateFieldInput.type != "date") 
  {
    birthdateFieldInput.disabled = true;
  return false}
  

  if (birthdateFieldInput.value < birthdateFieldInputMax) {
    birthdateFieldError.innerHTML =
      "Merci, ce champs est correctement rempli !";
    birthdateFieldError.style.color = "green";
    return true;
  }
};

const tournamentFieldCheck = () => {
  let tournamentFieldInput = document.getElementById("quantity");
  let tournamentFieldError = document.getElementById("errorquantity");
  let tournamentFieldInputOk = ([06]);
  let errorlocation1 = document.getElementById("errorlocation1");
  let locationCheckBox = document.getElementsByName("location");


  if (tournamentFieldInput.type != "number") 
  {
    tournamentFieldInput.disabled = true;
  return false}

  if (
    tournamentFieldInput.value > 0 &&
    tournamentFieldInput.value <= 6
  ) {
    tournamentFieldError.innerHTML = "Merci, ce champ est correctement rempli !";
    tournamentFieldError.style.color = "green";
    errorlocation1.innerHTML = "Veuillez choisir une réponse parmi les propositions ci-dessous";
    errorlocation1.style.color = 'orange';
    for (let i=0; i<locationCheckBox.length; i++
      ) {
        locationCheckBox[i].disabled = false;
      }
    return true;
  }
  else if (tournamentFieldInput.value === 0) {
    tournamentFieldError.innerHTML = "Merci, ce champ est correctement rempli !";
    tournamentFieldError.style.color = "green";
    errorlocation1.innerHTML = "";
    errorlocation1.style.display = 'none';
    for (let i=0; i<locationCheckBox.length; i++
      ) {
        locationCheckBox[i].disabled = true;
      }
    return true;
  }
  else if (tournamentFieldInput.value < 0 || tournamentFieldInput.value > 6) {
    tournamentFieldError.innerHTML = "Ce champ doit contenir une valeur comprise entre 0 et 6";
    tournamentFieldError.style.color = "red";
    errorlocation1.innerHTML = "";
    errorlocation1.style.display = 'none';
    for (let i=0; i<locationCheckBox.length; i++
      ) {
        locationCheckBox[i].disabled = true;
      }
    return false;
  }

};



const checkboxTcCheck = () => {
  let errorTc = document.getElementById('errorcheckbox');
  let checkboxTc = document.getElementById("checkbox1");
  if (checkboxTc.checked) {
    return true}
  else {
    errorTc.innerHTML="Veuillez valider les conditions d'utilisation afin de poursuivre votre inscription";
    errorTc.style.color = 'orange';
    return false}
};




const formSubmission = () => {
  if (nameFieldCheck = true) {isvalid = ok}
  if (surnameFieldCheck = true) {isvalid = Ok}
  if (emailFieldCheck = true)  
  if (birthdateFieldCheck = true) 
  if (checkboxTcCheck = true) {isvalid = Ok}
  
};


formInit();
