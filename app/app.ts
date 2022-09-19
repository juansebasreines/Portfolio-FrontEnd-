

let message: string = "Hello World";
console.log(message);

class Persona{

	// Atributos de clase persona
	private nombre: string;
	public apellido: string;
	public nacimiento: number;

	// Metodos de clase persona
	edadAprox(anioActual:number):number{

		return anioActual - this.nacimiento;
	}

}


class Operacion{

	// Atributos y constructos
	protected ValorA: number;
	protected ValorB: number;
	protected Resultado: number;	
	constructor(){
		this.ValorA = 0;
		this.ValorB = 0;
		this.Resultado = 0;
	}


	// Setters and getters
	set ValorA(value:number){
		this.ValorA = value;
	}

	set ValorA(value:number){
		this.ValorB = value;
	}

	get Resultado(value:number){
		return this.Resultado;
	}

}


// Clases suma y resta que son subclases de operacion
class Suma extends Operacion {

	Sumar() {
		this.Resultado = this.ValorA + this.ValorB;
	}

}

class Resta extends Operacion {

	Restar() {
		this.Resultado = this.ValorA - this.ValorB;
	}

}


// Creación de instancias de suma y resta

let OperacionS = new Suma();
let OperacionR = new Resta();

	// Sumando
OperacionS.ValorA = 45;
OperacionS.ValorB = 5;
OperacionS.Sumar();
console.log("La suma de A y B es: " + OperacionS.Resultado);

	// Restando
OperacionR.ValorA = 45;
OperacionR.ValorB = 5;
OperacionR.Restar();
console.log("La resta de A y B es: " + OperacionR.Resultado);
