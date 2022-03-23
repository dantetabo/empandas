const Nombre = prompt("Ingrese su nombre");
switch(Nombre){
    case "Dante":
        alert("Hola Dante")
        break;
    case "dante":
        alert("Hola Dante")
        break;
    default:
        alert(Nombre + " Bienvenido a La Chelita Empanadas!")
        break;
}
console.log("El nombre del usuario es " + Nombre);

function suma1() {
    let num1 = 120;
    let num2 = Number(document.getElementById('r1').value);
    let Respuesta = num1*num2;
    document.getElementById('r2').value = Respuesta;
    return Respuesta;

}

function suma2() {
    let num1 = 150;
    let num2 = Number(document.getElementById('y1').value);
    const Respuesta2 = num1*num2;
    document.getElementById('y2').value = Respuesta2;
    return Respuesta2;

}

function suma3() {
    let num1 = 150;
    let num2 = Number(document.getElementById('t1').value);
    const Respuesta3 = num1*num2;
    document.getElementById('t2').value = Respuesta3;
    return Respuesta3;

}

for(let contador=1; contador <= 5; contador++){
    let precio1 = 120*contador;  
console.log(`120 x ${contador} = ${precio1}`);
}

for(let contador=1; contador <= 5; contador++){
    let precio2 = 150*contador;  
console.log(`150 x ${contador} = ${precio2}`);
if(contador == 2){
    break;
}
}


for(let contador=1; contador <= 5; contador++){
    let precio3 = 150*contador;  
console.log(`150 x ${contador} = ${precio3}`);
if(contador == 4){
    break;
}
}