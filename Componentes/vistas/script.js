let w = document.getElementById("login_section")
let x = document.getElementById("cambiar")
let y = document.getElementById("codigo")
let z = document.getElementById("cambiar_contraseña")
let code_input = document.getElementById("code")
let text_alert = document.getElementById("texto_alert")
let random_code;
const formulario = document.getElementById("forgotpassword")

function check_code(){
    const valor = code_input.value
    if(valor == random_code){
        y.style.opacity = "0%"
        z.style.opacity = "100%"
        z.style.visibility = "visible"
        setTimeout(() => {
            y.style.visibility = "hidden"
        }, 500)
    }else if(valor!=random_code){
        console.log("hola")
        text_alert.textContent = "Código Incorrecto"
    }
}

function cc(){
    w.style.opacity = "0%"
    x.style.opacity = "100%"
    x.style.visibility = "visible"
    setTimeout(() => {
        w.style.visibility = "hidden"
    }, 500)
}

function go_back(){
    x.style.opacity = "0%"
    w.style.opacity = "100%"
    w.style.visibility = "visible"
    setTimeout(() => {
        x.style.visibility = "hidden"
    }, 500)
}

function go_code(){
    random_code = Math.floor(Math.random()*(999999-100000)+100000)
    console.log(random_code)
    x.style.opacity = "0%"
    y.style.opacity = "100%"
    y.style.visibility = "visible"
    setTimeout(() => {
        x.style.visibility = "hidden"
    }, 500)
}

function login(){
    if(formulario.checkValidity()) {
        x.style.opacity = "0%"
        w.style.opacity = "100%"
        w.style.visibility = "visible"
        setTimeout(() => {
            x.style.visibility = "hidden"
        }, 500)
    }
}