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