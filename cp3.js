const inputNome = document.querySelector("#idNome");
const labelName = document.querySelector("label[for='idNome']")

inputNome.addEventListener("keyup", () =>{
    if(inputNome.value.length < 5) {
        inputNome.setAttribute("style", "outline-color: red;");
        labelName.setAttribute("style", "color: red;");
    } else if(inputNome.value.length == 0) {
        inputNome.setAttribute("style", "outline-color: red;");
        labelName.setAttribute("style", "color: red;");
    } else {
        inputNome.setAttribute("style", "outline-color: green;");
        labelName.setAttribute("style", "color: green;");
    }
})

//---------------------------

const inputSobrenome = document.querySelector("#idSobrenome");
const labelSobrenome = document.querySelector("label[for='idSobrenome']")

inputSobrenome.addEventListener("keyup", () =>{
    if(inputSobrenome.value.length < 5) {
        inputSobrenome.setAttribute("style", "outline-color: red;");
        labelSobrenome.setAttribute("style", "color: red;");
    } else if(inputSobrenome.value.length == 0) {
        inputSobrenome.setAttribute("style", "outline-color: red;");
        labelSobrenome.setAttribute("style", "color: red;");
    } else {
        inputSobrenome.setAttribute("style", "outline-color: green;");
        labelSobrenome.setAttribute("style", "color: green;");
    }
})

// ---------------------------------

const inputEmail = document.querySelector("#idEmail");
const labelEmail = document.querySelector("label[for='idEmail']")

inputEmail.addEventListener("keyup", () =>{
    if(inputEmail.value.length < 5) {
        inputEmail.setAttribute("style", "outline-color: red;");
        labelEmail.setAttribute("style", "color: red;");
    } else if(inputEmail.value.length == 0) {
        inputEmail.setAttribute("style", "outline-color: red;");
        labelEmail.setAttribute("style", "color: red;");
    } else if(inputEmail.value.includes("@") == false) {
        inputEmail.setAttribute("style", "outline-color: red;");
        labelEmail.setAttribute("style", "color: red;");
    } else {
        inputEmail.setAttribute("style", "outline-color: green;");
        labelEmail.setAttribute("style", "color: green;");
    }
})

//--------------------------

const inputSenha = document.querySelector("#idSenha");
const labelSenha = document.querySelector("label[for='idSenha']")

inputSenha.addEventListener("keyup", () =>{
    if(inputSenha.value.length < 6) {
        inputSenha.setAttribute("style", "outline-color: red;");
        labelSenha.setAttribute("style", "color: red;");
    } else if(inputSenha.value.length > 8) {
        inputSenha.setAttribute("style", "outline-color: red;");
        labelSenha.setAttribute("style", "color: red;");
    } else if(inputSenha.value.length == 0) {
        inputSenha.setAttribute("style", "outline-color: red;");
        labelSenha.setAttribute("style", "color: red;");
    } else {
        inputSenha.setAttribute("style", "outline-color: green;");
        labelSenha.setAttribute("style", "color: green;");
    }
})