class Formulario {
    constructor() {
        this.fForm = document.querySelector("#formBlue"),
            this.fNombre = document.querySelector("#name"),
            this.fPApellido = document.querySelector("#sname"),
            this.fSApellido = document.querySelector("#s2name"),
            this.fFechaNacimiento = document.querySelector("#date"),
            this.fEmail = document.querySelector("#email"),
            this.fContrasena = document.querySelector("#pass"),
            this.fRContrasena = document.querySelector("#rpass"),
            this.aCBox = document.querySelectorAll("[name = aficion]"),
            this.fParrafo = document.querySelector("#start"),
            this.rButt = document.querySelectorAll("[name = category]"),
            this.fSalida = [],
            this.sSelect = "",
            this.valCurso = "",
            this.aPasswd = ["", ""],
            this.domSubCurso = document.querySelector("#sCurso"),
            this.cCurso = {
                web: ["HTML", "Css", "JS", "PHP"],
                sist: ["aaaaa", "bbbbb", "ccccc", "ddddd"],
                obj: ["11111", "22222", "33333", "44444"]
            }

    }

    sacarTextos() {
        this.fSalida = [
            { etiqueta: "Nombre", valor: this.fNombre.value },
            { etiqueta: "Primer Apellido", valor: this.fPApellido.value },
            { etiqueta: "Segundo Apellido", valor: this.fSApellido.value },
            { etiqueta: "Fecha de nacimiento", valor: this.fFechaNacimiento.value },
            { etiqueta: "Correo Electronico", valor: this.fEmail.value },
            //{ etiqueta: "Contraseña", valor: this.fContrasena.value },
        ]
    }


    diaHoy() {
        let hoy = new Date();
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        document.getElementById("systemDate").innerHTML = "Hoy es " + " " + dias[hoy.getDay()] + " " + "dia" + " " + hoy.getDate() + " " + "de" + " " + meses[hoy.getMonth()] + " " + "del año" + " " + hoy.getFullYear();
    }
    chBox() {
        let aficiones = ""
        for (let i = 0; i < this.aCBox.length; i++) {
            if (this.aCBox[i].checked) {
                aficiones = aficiones + " " + this.aCBox[i].value + " ,";
            }
        }
        this.fSalida[this.fSalida.length] = { etiqueta: "Aficiones", valor: aficiones.slice(0, -1) }
    }

    doIt(the_value) {
        switch (the_value) {
            case "web":
                this.cargarSelect(this.domSubCurso, this.cCurso.web)
                this.valCurso = this.rButt[0].nextSibling.data;
               this.domSubCurso.classList.remove("oculto");
                break;

            case "sist":
                this.cargarSelect(this.domSubCurso, this.cCurso.sist)
                this.valCurso = this.rButt[1].nextSibling.data;
             this.domSubCurso.classList.remove("oculto");
                break;

            case "obj":
                this.cargarSelect(this.domSubCurso, this.cCurso.obj)
                this.valCurso = this.rButt[2].nextSibling.data;
             this.domSubCurso.classList.remove("oculto");
                break;
          case "nada":
               
              this.domSubCurso.className = "oculto";
                break;

        }
    }

    escribeSelect() {

        let sOpt = this.domSubCurso.options[this.domSubCurso.selectedIndex];
        let txtSelecionado = sOpt.text;
        this.fSalida[this.fSalida.length] = { etiqueta: this.valCurso, valor: txtSelecionado }
    }

    cargarSelect(oDom, aDatos) {
        oDom.innerHTML = "";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }

    comparar() {
        var msg = "";
        if (this.fContrasena.value != this.fRContrasena.value) {
            msg = "Las contraseñas no coinciden"
        }
        this.fRContrasena.setCustomValidity(msg)
    }

    comprobar() {
        var validado = true;

        this.aPasswd[0] = this.fContrasena.value;
        this.aPasswd[1] = this.fRContrasena.value;
        if (this.aPasswd[0] != this.aPasswd[1]) {
            validado = false;
        }
        this.escribirContrasena(validado);

    }

    escribirContrasena(val) {
        var msgs = "";
        if (!val) {
            msgs = "Las contraseñas no coinciden"
            this.fContrasena.focus();

        } else {
            this.fSalida[this.fSalida.length] = { etiqueta: "Contraseña", valor: this.fContrasena.value }
            this.escribirTextos()
        }


    }
    escribirTextos() {

        this.fForm.className = "oculto";
        document.querySelector("#respuesta").className = "bloque";
        for (var i = 0; i < this.fSalida.length; i++) {
            this.fParrafo.innerHTML += `<li> ${this.fSalida[i].etiqueta} :  <span>${this.fSalida[i].valor}</span></li><hr> `
        }
    }
    fRecDatos() {

        this.sacarTextos();
        this.chBox();
        this.escribeSelect();
        //this.escribeSelect();
        this.fForm.onsubmit = this.comprobar();
        this.fRContrasena.oninput = this.comparar();

        //this.escribirTextos();
    }

}


document.addEventListener("DOMContentLoaded", function (e) {
    oFormulario = new Formulario
    e.preventDefault();
    document.getElementById("submit").onclick = oFormulario.fRecDatos.bind(oFormulario)
    oFormulario.diaHoy()
}, false);