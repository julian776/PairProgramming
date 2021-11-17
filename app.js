let numeroMinimo = 1;

let numeroMaximo = 100;

let numeroSecreto = Math.random() * numeroMaximo;
numeroSecreto = parseInt(numeroSecreto);

let intentos = 5;

let numeroIngresado = prompt("Ingresa el número que creas es el número magico", "0");
while(intentos > 0){
    numeroIngresado = parseInt(numeroIngresado);

    if(numeroIngresado === 0)
        break;
    else if(numeroIngresado === numeroSecreto){
        alert("FELICITACIONES!!! GANASTE");
        break;
    }
    else if (numeroIngresado > numeroSecreto){
        numeroIngresado = prompt("El numero magico es menor, ingresa uno nuevo: ")
        intentos --
    }
    else if (numeroIngresado < numeroSecreto){
        numeroIngresado = prompt("El número magico es mayor, ingresa uno nuevo: ");
        intentos --
    }
    
}

if(intentos == 0){
    alert("Perdiste se acabaron los intentos! el numero era "+ numeroSecreto);
}

