class Formulario {

    constructor() {
        this.oDatos = {
            "CuentaCorreo": "",
            "Contraseña": "",
            "Nombre": "",
            "PrimerApellido": "",
            "SegundoApellido": "",
            "DNI": "",
            "FechaNacimiento": "",
            "Domicilio": "",
            "Ciudad": "",
            "CódigoPostal": "",
            "Aficiones": [],

            "Curso": "",
            "Especialidad": "",

            "Comentarios": [],

        };

        // referencia al párrafo donde vamos a escribir los datos del usuario
        this.oParrafo = document.getElementById("listaDatos");


        // Al hacer click en enviar nos muestra los datos recogidos:

        this.oEnviar = document.getElementById("btnSubmit")

        this.oEnviar.addEventListener("click",
            this.recogeDatos.bind(this));


        //Cambiamos el submit:

        this.oForm = document.getElementById("formul")

        this.oForm.addEventListener("submit",
            this.simulaEnvio.bind(this));
    }


    //anulamos el comportamiento por defecto del submit:

    simulaEnvio(oE) {
        alert("Sus datos han sido enviados. Muchas gracias.")
        oE.preventDefault();
        this.escribeDatos();
    }

    //Radio button con select

    radioOpciones(eleccion) {
        this.oDatos.Curso = "";
        this.radioBoton = document.querySelectorAll("[name = category]");
        this.domEspecialidad = document.querySelector("#especialidades");
        this.cCurso = {
            HTML: ["Diseño de webs", "Mantenimiento de webs", "Orientado a objetos", "Diseño libre"],
            CSS: ["Apariencia de webs", "Apariencia de aplicaciones", "Creación de estilos", "Bootstrap"],
            JavaScript: ["Core", "Orientado a webs", "jQuery"],
            Angular: ["Testing", "Animación", "Accesibilidad"],
            PHP: ["XAMPP", "LAMP", "WAMP", "MAMP", "UwAmp"]
        }

        switch (eleccion) {
            case "HTML":
                this.cargarSelect(this.domEspecialidad, this.cCurso.HTML)
                this.oDatos.Curso = this.radioBoton[0].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "CSS":
                this.cargarSelect(this.domEspecialidad, this.cCurso.CSS)
                this.oDatos.Curso = this.radioBoton[1].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "JavaScript":
                this.cargarSelect(this.domEspecialidad, this.cCurso.JavaScript)
                this.oDatos.Curso = this.radioBoton[2].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "Angular":
                this.cargarSelect(this.domEspecialidad, this.cCurso.Angular)
                this.oDatos.Curso = this.radioBoton[2].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "PHP":
                this.cargarSelect(this.domEspecialidad, this.cCurso.PHP)
                this.oDatos.Curso = this.radioBoton[2].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "nada":

                this.domEspecialidad.className = "oculto";
                break;

        }
    }

    cargarSelect(oDom, aDatos) {
        oDom.innerHTML = "";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }

    //Recogemos los datos:

    recogeDatos(oE) {
        this.oDatos.CuentaCorreo = document.getElementById("correo").value;
        this.oDatos.Contraseña = document.getElementById("cont").value;
        this.oDatos.Nombre = document.getElementById("name").value;
        this.oDatos.PrimerApellido = document.getElementById("ape1").value;
        this.oDatos.SegundoApellido = document.getElementById("ape2").value;
        this.oDatos.DNI = document.getElementById("dni").value;
        this.oDatos.FechaNacimiento = document.getElementById("fecha").value;
        this.oDatos.Domicilio = document.getElementById("domic").value;
        this.oDatos.Ciudad = document.getElementById("ciudad").value;
        this.oDatos.CódigoPostal = document.getElementById("cp").value;

        //Datos del checkbox:

        this.oDatos.Aficiones = document.querySelectorAll("[name = aficion]");

        let afic = ""
        for (let i = 0; i < this.oDatos.Aficiones.length; i++) {
            if (this.oDatos.Aficiones[i].checked) {
                afic = afic + " " + this.oDatos.Aficiones[i].value + " ,";
            }
        }
        this.oDatos.Aficiones = afic.slice(0, -1);

        //Datos del Select:
        this.oDatos.Especialidad = [];
        let sOpcion = this.domEspecialidad.options[this.domEspecialidad.selectedIndex];
        let EspecialidadSelecionada = sOpcion.text;
        this.oDatos.Especialidad = EspecialidadSelecionada


        //Comentarios:

        this.oDatos.Comentarios = document.getElementById("coment").value;

        //Fin de la recogida de datos
    }

    escribeDatos() {
        //ocultar formulario
        document.getElementById("formul").classList.toggle("oculto")
            //mostrar el div oculto para el resultado
        document.getElementById("resultado").classList.toggle("oculto");
        //incorporamos a la lista cada elemento del objeto		
        for (var i in this.oDatos) {
            this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                this.oDatos[i] + "</strong></li>";
        };
    }



} // Fin de la clase Formulario

document.addEventListener("DOMContentLoaded", function() {
    oFormulario = new Formulario
}, false);