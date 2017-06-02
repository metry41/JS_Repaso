const MONTHS = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
]
class Formulario  {
    constructor () {
        this.oDatos = [
            {descripcion: "Cuenta de correo", valor: ""},
            {descripcion: "Nombre", valor: ""},
            {descripcion: "Apellido", valor: ""},
            {descripcion: "Fecha", valor: ""},
            {descripcion: "Aficiones", valor: ""}
        ];
        this.form = "";
        this.result = "";
        this.oBtnSend = "";
    }

    start () {
        
        this.oBtnSend = document.querySelector("#btnSend");
        //this.oBtnSend.preventDefault();
        this.oBtnSend.addEventListener("click", this.read.bind(this));
        
    }//fin start

    read (event){

        event.preventDefault();
        console.log("controllo 1")
        this.oDatos[0].valor = document.getElementById("correo").value;
        this.oDatos[1].valor = document.getElementById("nombre").value;
        this.oDatos[2].valor = document.getElementById("apellido").value;

        let control = this.dateControl();
        console.log(control);
        console.log(typeof(control));

        let aCheck = document.forms[0];
        let aChecked = []
        
        let y=0;
        for(let i=0 ; i<aCheck.length ; i++){
            if(aCheck[i].checked){
                aChecked[y] = aCheck[i].name;
                y++;
            }
        }

        this.oDatos[4].valor = aChecked.toString();



        let pw = document.getElementById("pw").value;
        let pw2 = document.getElementById("pw2").value;

        console.log (control);
        // controlo de las contrasenas
        if (pw == pw2 && control == 0){
            this.print();
        }
        else{
            document.getElementById("compare").innerHTML = "Las dos contrasenas no son iguales"
        }

    }// fin read

    dateControl (){

        let day = document.getElementById("day").valueAsNumber;
        let month = document.getElementById("month").valueAsNumber;
        let year = document.getElementById("year").valueAsNumber;

        let control = 0;
        if (isNaN(day) || isNaN(month) || isNaN(year)){
            // la fecha no es obligatoria, si el usuario no la pone
            // no hace el controlo
            if (isNaN(day) && isNaN(month) && isNaN(year)){
                return 0;
            }
            else {
                document.getElementById("invalidDate").innerHTML = "Faltan algunos datos"
                control = -10;
            }
        }else {
            let date = new Date(year, month, day);

            if (date.getMonth() != month){
                document.getElementById("invalidDate").innerHTML = "La fecha estÃ  incorecta";
                control = -10;
            }
            else{
                // si es por lo menos la segunda vez que se executa y
                // antes habia un problema con la fecha, vasio el div
                document.getElementById("invalidDate").innerHTML = "";
            }
        }

        return (control);

    }//fin date

    print (){
        this.form = document.querySelector("#form");
        this.result = document.querySelector("#resultado");
        let lista = document.getElementById("resultado").children;

        for (let i=0 ; i<this.oDatos.length ; i++){
            if(this.oDatos[i].valor != ""){
                lista[1].innerHTML += "<li>" + this.oDatos[i].descripcion + ": " + this.oDatos[i].valor + "</li>";
            }
        }

        this.form.className = "hidden";
        this.result.className = "";
    }


}// fin class Formulario

function printDate (){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anno = fecha.getFullYear();

    $("#date").html("Hoy es el " + dia + " de " + MONTHS[mes] + " " + anno);

}

$(function (){
    
    printDate ();
    new Formulario().start();

});