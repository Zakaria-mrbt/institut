
let dob = new Date;
console.log(dob)



const usernameEl = document.forms.formValidate.username;
const firstnameEl = document.forms.formValidate.firstname;
const lastnameEl = document.forms.formValidate.lastname;
const dateEl = document.forms.formValidate.date;
const emailEl = document.forms.formValidate.email;
const passwordEl = document.forms.formValidate.password;
const comfirmpasswordEl = document.forms.formValidate.comfirmpassword;
const form = document.querySelector("#signup");

// Création de constante accueillant une fonction de verification par input
const checkUsername = () => {
    let valid = false;

    const min = 3, // min max caratéres
        max = 15;

    const username = usernameEl.value.trim(); // trim élimine les espaces dans une chaine de caractéres

    if (!isRequired(username)) {
        showError(usernameEl, "Le nom d'utilisateur ne peut pas être vide");
    } else if (!isBetween(username.length, min, max)) {
        showError(
            usernameEl,
            `Le nom d'utilisateur doit avoir entre ${min} et ${max} caractères.`
        );
    } else if(isBanned(username)) { 
        showError( usernameEl, "Ce mot n'ai pas autoriser.");
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
// Création de constante accueillant une fonction de verification pour chaque input
const checkFirstname = () => {
    let valid = false;
    
    const min = 3, // min max caratéres
    max = 15;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, "Le Prénom ne peut pas être vide");
    } else if (!isBetween(firstname.length, min, max)) {
        showError(
            firstnameEl,
            `Le Nom doit avoir entre ${min} et ${max} caractères.`
        );
    }   else if(!isLetter(firstname)) { 
        showError( firstnameEl, 'Le Prénom ne doit pas contenir de chiffres.');  
    }
    else{
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkLastname = () => {
    let valid = false;

    const min = 3, // min max caratéres
    max = 15;
     

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, "Le Nom ne peut pas être vide");
    }else if (!isBetween(lastname.length, min, max)) {
        showError(
            lastnameEl,
            `Le Prénom doit avoir entre ${min} et ${max} caractères.`
        );
    } 
    else if(!isLetter(lastname)) { 
        showError( lastnameEl, 'Le Nom ne doit pas contenir de chiffres.');  
    }
    
    else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};



const checkDate = () => {

    let valid = false;
    const date = dateEl.value.split('-');
    
    let dateBirdYear = date[0]
    let dateBirdMonth = date[1]
    let dateBirdDay = date[2]
    
    
    let newDate = new Date()
    let nowyear = newDate.getFullYear()
    let nowmonth= newDate.getMonth()+1;
    let nowday = newDate.getDate()
    
    
    
    let difYear = nowyear-dateBirdYear
    let difMonth = nowmonth - dateBirdMonth
    let difDay = nowday-dateBirdDay
    
    
    if (dateEl.value === "") {
        showError(dateEl, "La date ne peut etre vide");
    } else if (difYear>21) {
        showSuccess(dateEl);
     }   else if ( difYear == 21 && ((difMonth >0) || (difMonth==0 && difDay>=0)) ){
                showSuccess(dateEl);
    } else {
        showError(dateEl,
            "Vous devez avoir 21 ans.");
    valid = true;
    }
    return valid;
    };





// Création de constante accueillant une fonction de verification pour chaque input
const checkEmail = () => {

    let valid = false;

    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, "l'email ne peut etre vide");
    } else if (!isEmailValid(email)) {
        showError(emailEl, "Email non valide");
    } else if(isBanned(email)) { 
        showError(emailEl, "Ce Email n'ai pas autoriser.");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;

    const min = 8;

    const password = passwordEl.value.trim();

    if (!isRequired(password)){

        showError(passwordEl, "le mot de passe ne peut etre vide");

    }else if (!isBetween(password.length, min)) {
        showError(
            passwordEl,
            `Le mot de passe contenir ${min} caractères minimum.`
        );
    
    } 
    else if (!isPassword(password)) { 
        showError( passwordEl, "il doit contenir 1 caractère minuscule, 1 caractère majuscule, 1 chiffre et au moins un caractère spécial dans cet ensemble (!@#$%^&*).");
    }
    else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;

};


const checkComfirmpassWord = () => {
    let valid = false;

    const comfirmpassWord = comfirmpasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(comfirmpassWord)){

        showError(comfirmpasswordEl, "le mot de passe ne peut etre vide");

    }
    else if (comfirmpassWord !== password) {
        showError(
            comfirmpasswordEl,
            `Le mot de passe ne correspond pas.`
        );
    
    } 
    else {
        showSuccess(comfirmpasswordEl);
        valid = true;
    }
    return valid;

};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // utilisation d'une regex pour comparer le format type mail
    return re.test(email); // La méthode native test() teste une correspondance dans une chaîne
};


const isRequired = (value) => (value === "" ? false : true); // Si la value retourne une chaine de caractére vide alors isRequired = false

const isLetter = (name) =>{
    const re = /^[A-Za-z]+$/;
    return re.test(name);
    
} ;

const isPassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    
    return re.test(password);

};

const isBanned = (username) => {
    
    const re = /Root|root|AFPA|afpa|DEUS|deus/;
    return re.test(username);
} ;





const isBetween = (length, min, max) =>
    length < min || length > max ? false : true; // si length est plus petit que min ou length est plus grand que max alors isBetween = false

const showError = (input, message) => {
    // Récupération de l'élément parent de formulaire
    const formField = input.parentElement;
    // ajout de la classe error
    formField.classList.remove("success");
    formField.classList.add("error");

    // voir le message d'erreur dans la balise small
    const error = formField.querySelector("small");
    error.textContent = message;
};

const showSuccess = (input) => {
    // Récupération de l'élément parent de formulaire
    const formField = input.parentElement;

    // supprimer la classe error
    formField.classList.remove("error");
    formField.classList.add("success");

    // cacher le message d'erreur dans la balise small
    const error = formField.querySelector("small");
    error.textContent = "";
};

form.addEventListener("submit", function (e) {
    // empécher l'envois du formulaire
    e.preventDefault();

    // validation des champs
    let isUsernameValid = checkUsername(),
        isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isDateValid = checkDate(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isComfirmpassWordValid = checkComfirmpassWord();
        
    let isFormValid =
        isUsernameValid &&
        isFirstnameValid &&
        isLastnameValid &&
        isDateValid &&
        isEmailValid &&
        isPasswordValid &&
        isComfirmpassWordValid ;

    // soumettre le formulaire si tout est valide
    if (isFormValid) {
        console.log('Good Boy ;)');
        alert('GooD Game !!!');
    }
});
