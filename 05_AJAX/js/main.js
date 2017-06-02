
class Formulario {

	constructor () {
		this.aFiles = [
			"alvaro.txt",
			"file01.txt",
			"file02.txt",
			"file03.txt",
			"historia.txt",
			"holamundo.txt",
			"saludos.json"
		]

		this.path =  "datos/", // carpeta de datos (json / jpg)
		this.file =  ""; // path´+ nombre de los ficheros con extension
		this.oConexion = {} // objeto Ajax

	} // Fin del constructor

	controller () {
		// Define el manejadore de eventos del boton
		let aDomBotones = document.querySelectorAll('button');		
		for (let i = 0; i < aDomBotones.length; i++) {
			aDomBotones[i].addEventListener("click",
				this.btnClic.bind(this)
			)
		};
		// Inicializa el dataset de ficheros
		this.pintaDataset();
	} // Fin del controller

	pintaDataset() {
		let oDomInput = document.querySelector('#ficherosDatalist');		
		oDomInput.innerHTML = ""
		for (let i = 0; i < this.aFiles.length; i++) {
			let sFile = this.aFiles[i];
			oDomInput.innerHTML += `
				<option>${sFile}</option>`;
		};
	} // Fin del metodo pintaDataset

	btnClic (oEvent) {
		// Obtener la instancia del objeto XMLHttpRequest
		this.file = this.path + document.querySelector("#Nombre").value;
		if (this.file) {
			//codigo de la peticion	
			this.oConexion = new Ajax("GET",
				this.file + '?nocache=' + Math.random(),
				this.muestraContenido.bind(this));
		};								
	}; // Fin del metodo btnClic

	muestraContenido () {				
		console.log(this)
		console.log(this.oConexion.oPeticion.readyState)
		if (this.oConexion.oPeticion &&
			this.oConexion.oPeticion.readyState == READY_STATE_COMPLETE) {
			try {
				if (this.oConexion.oPeticion.status == 200) {							
					document.querySelector('#contenidos').innerHTML = 
						this.oConexion.oPeticion.responseText
				} else {
					throw "Error " + this.oConexion.oPeticion.status + 
							" - " + this.oConexion.oPeticion.statusText;
				}		            
			}
			catch (error) {
				document.querySelector('#contenidos').innerHTML = error;
			}
		}
	} // fin del mÃ©todo manejador del evento onreadystatechange

} // Fin de la clase formulario