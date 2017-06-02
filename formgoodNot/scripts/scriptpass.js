function main() {
var formulario = new Formulario();
var form = document.querySelector("#formBlue");
var contrasena = document.querySelector("#pass");
var rcontrasena = document.querySelector("#rpass");
var aPasswd = ["", ""];
var sacar = formulario.sacarTextos.fSalida;



form.submit = comprobar();
rcontrasena.oninput = comparar();

function comparar() {
    var msg = "";
    if (contrasena.value != rcontrasena.value) {
        msg = "Las contraseñas no coinciden"
    }
    rcontrasena.setCustomValidity(msg)
}

function comprobar() {
    var validado = true;
    aPasswd[0] = contrasena.value;
    aPasswd[1] = rcontrasena.value;
    if (aPasswd[0] != aPasswd[1]) {
        validado = false;
    }
    validar(validado);

}
function validar(val) {
    var msgs = "";
    if (!val) {
        msgs = "Las contraseñas no coinciden"
        contrasena.focus();
    } else {
        sacar[sacar.length] = { etiqueta: "Contraseña", valor: contrasena.value }
    }
}


};
document.addEventListener("DOMContentLoaded", main, false);
