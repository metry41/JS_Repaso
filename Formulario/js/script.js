class Formulario {
    constructor() {
        this.oForm = document.querySelector("formulario1"),
        this.oNombre = document.querySelector("#name"),
        this.oApellido1 = document.querySelector("#apellido1"),
        this.oApellido2 = document.querySelector("#apellido2"),
        this.oCumpleaños = document.querySelector("#fecha"),
        this.oEmail = document.querySelector("#email"),
        this.oContraseña = document.querySelector("#pass"),
        this.oContraseña2 = document.querySelector("#pass2"),
        this.aAficion = document.querySelectorAll("[name = aficion]"),
        this.oParrafo = document.querySelector("#lista"),
        this.radioButton = document.querySelectorAll("[name = category]"),
        this.oDatos = [],
        this.cursoValue = "",
        this.aPasswd = ["", ""],
        this.domOpt = document.querySelector("#sCurso"),
        this.cProgramas = {
            web: ["HTML", "css", "JavaScript", "PHP"],
            sist: ["HTML", "css", "JavaScript", "PHP"],
            obj: ["HTML", "css", "JavaScript", "PHP"]
            }

        /*this.oEnviar = document.getElementById("enviar")

        this.oEnviar.addEventListener("click",
        this.escribeTexto.bind(this));



        this.oForm = document.getElementById("formulario")

        this.oForm.addEventListener("submit",
        this.simulaEnvio.bind(this));*/

    }

    /*simulaEnvio(oE) {
            oE.preventDefault();
            this.pintaRespuesta()
        }*/

    apareceDesplegable (value) {
        switch (value) {
            case "web":
                this.pintaSeleccion(this.domOpt, this.cProgramas.web)
                this.cursoValue = this.radioButton[0].nextSibling.data;
                this.domOpt.classList.remove("oculto");
                break;

            case "sist":
                this.pintaSeleccion(this.domOpt, this.cProgramas.sist)
                this.cursoValue = this.radioButton[1].nextSibling.data;
                this.domOpt.classList.remove("oculto");
                break;

            case "obj":
                this.pintaSeleccion(this.domOpt, this.cProgramas.obj)
                this.cursoValue = this.radioButton[2].nextSibling.data;
                this.domOpt.classList.remove("oculto");
                break;

          case "nada":
                this.domOpt.className = "oculto";
                break;
        }
    }

    dibujaBoton () {
        let sOpc = this.domOpt.options[this.domOpt.selectedIndex];
        this.oDatos[this.oDatos.length] = { etiqueta: this.cursoValue, valor: sOpc.text }
    }

    pintaSeleccion(oDom, aDatos) {
        oDom.innerHTML = "";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }

    escribeTexto () {
        this.oDatos = [
            { etiqueta: "Nombre", valor: this.oNombre.value },
            { etiqueta: "Primer Apellido", valor: this.oApellido1.value },
            { etiqueta: "Segundo Apellido", valor: this.oApellido2.value },
            { etiqueta: "Fecha de nacimiento", valor: this.oCumpleaños.value },
            { etiqueta: "Correo Electronico", valor: this.oEmail.value },
        ]
    }

    fecha() {
        let hoy = new Date();
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        document.getElementById("currentDate").innerHTML = "Hoy es " + " " + dias[hoy.getDay()] + " " + "dia" + " " + hoy.getDate() + " " + "de" + " " + meses[hoy.getMonth()] + " " + "del año" + " " + hoy.getFullYear();
    }

    seleccion() {
        let aficiones =""
        for (var i = 0; i < this.aAficion.length; i++) {
            if (this.aAficion[i].checked) {
                aficiones= aficiones + " " + this.aAficion[i].value + " ,";
            }
        }
        this.oDatos[this.oDatos.length] = {etiqueta: "Aficiones", valor: aficiones.slice(0, -1)}
    }
    comparar() {
        var msg = "";
        if (this.oContraseña.value != this.oContraseña2.value) {
            msg = "Revise las contraseñas"
        }
        this.oContraseña2.setCustomValidity(msg)
    }
    comprobar() {
        var validado = true;

        this.aPasswd[0] = this.oContraseña.value;
        this.aPasswd[1] = this.oContraseña2.value;
        if (this.aPasswd[0] != this.aPasswd[1]) {
            validado = false;
        }
        this.decirPass(validado);
    }
    decirPass(x) {
        var msgs = "";
        if (!x) {
            msgs = "Revise las contraseñas"
            this.oContraseña.focus();

        } else {
            this.oDatos[this.oDatos.length] = { etiqueta: "Contraseña", valor: this.oContraseña.value }
            this.escribirTextos()
        }
    }
    pintaRespuesta() {
        this.oForm.className = "oculto";
        document.querySelector("#respuesta").className = "visto";
        for (var i = 0; i < this.oDatos.length; i++) {
            this.oParrafo.innerHTML += `<li> ${this.oDatos[i].etiqueta} :  <span>${this.oDatos[i].valor}</span></li><hr> `
        }
    }
    pasaDatos() {
        this.seleccion();
        this.escribeTexto();
        this.dibujaBoton();
        this.oForm.onsubmit = this.comprobar();
        this.oContraseña2.oninput=this.comparar();
    }
    
}


document.addEventListener("DOMContentLoaded", function (q) {
    oFormulario = new Formulario
    q.preventDefault();
    document.querySelector("#enviar").onclick = oFormulario.pasaDatos.bind(oFormulario);
    oFormulario.fecha();
}, false);



