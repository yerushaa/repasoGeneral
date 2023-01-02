// inicio de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado=null;
let movimientos = 0;
let aciertos=0;
let temporizador = false;
let timer = 30;
let timerInicial= 30;
let tiempoRgresivoId= null;

//apuntando a decumento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos =document.getElementById ('aciertos');
let mostrarTiempo =document.getElementById ('t-restante');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Match.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
    tiempoRgresivoId = setInterval(()=>{
    timer++;
    mostrarTiempo.innerHTML = `Tiempo: ${tiner} segundos`;
    if (timer == 0){
        clearInterval (tiempoRgresivoId);
        bloquearTarjetas
    }
    },1000)
}

function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = numeros[i];
    tarjetaBloqueada.disabled = true
    }
}

//funcion principal
function destapar(id){

if(temporizador = false){
    contarTiempo();
    temporizador = true;
}

tarjetasDestapadas++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas == 1){
    //num
  let tarjeta1 = document.getElementById(id);
   primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    //deshabilitar 1 boton
    tarjeta1.disabled = true;
    tarjetasDestapadas++;
    pri
}else if (tarjetasDestapadas ==2){

    //mostramos 2 num
    tarjeta2 = document.getElementById(id);
    segundoResultado= numeros [id];
    tarjeta2.innerHTML = segundoResultado

    // deshabilitar 2 boton
    tarjeta2.disabled = true;
    tarjetasDestapadas++;
    se

    //mas movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    
    if(primerResultado == segundoResultado){
        tarjetasDestapadas = 0;
        aciertos++;
        mostrarAciertos.innerHTML= `Aciertos: ${aciertos}`;

        if(aciertos == 8){
            clearInterval(tiempoRgresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            mostrarTiempo.innerHTML = `Genial! tan solo tardaste ${timerInicial - timer} segundos`
            mostrarMovimientos.innerHTML= `Movimientos: ${movimientos}`;
        }
    }else {
        //mostrar almanecimient valores y volver a tapar
        setTimeout( () =>{
            tarjeta1.innerHTML = '';
            tarjeta2.innerHTML = '';
            tarjeta1.disabled = false;
            tarjeta2.disabled = false;
            tarjetasDestapadas = 0;
        },800)
    }
}
}

