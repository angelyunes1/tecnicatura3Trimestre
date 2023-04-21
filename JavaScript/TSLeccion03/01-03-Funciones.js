miFuncion(5,2);
function miFuncion(a,b){
    //console.log('Sumamos: '+a +" + "+b+" = "+(a+b))
    return a + b;

}
//LLamamos a la funcion
miFuncion(5,4);

let resultado = miFuncion(6,7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function(a,b){return a+b}; //necesita estar cerrado
resultado = x(5,6);//al llamarla se pone la variable y el parentecis 
console.log(resultado);

//Funciones de tipo self  y invoking
(function(a,b){
    console.log("ejecutando la funcion: "+(a+b));
})(9,6);


console.log(typeof miFuncion)
function miFuncion2(a,b){
    console.log(arguments.length);
}

miFuncion2(5,7);

//toString
var miFuncionTexto = miFuncion2.toString();
console.log(miFuncionTexto);

//Funciones flechas
const sumarFuncionFlecha = (a,b) => a + b;
resultado = sumarFuncionFlecha (3,7); //Asignamos el valor a la variable
console.log(resultado);

//Funcion tipo expresion
let sumar = function(a =4,b =8){
    console.log(arguments[0]); //Muestra el parametro de A
    console.log(arguments[1]); //Muestra el parametro de B
    return a + b + arguments[2] ;
}

resultado = sumar(5,1,9);
console.log(resultado);


let repuesta = sumarTodo(5,4,13,10,9);
console.log(repuesta);
function sumarTodo(){
    let suma = 0;
    for(let i =0; i < arguments.length; i++){
        suma += arguments[i]; // arguments es para arreglos
    }
    return suma;

}

//Tipos primitivos 
let k = 10;
function cambiarValor(a){//Paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);


//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lopez'
}
console.log(persona)

function cambiarValorObjeto(p1){
    p1.nombre = 'ignacio';
    p1.apellido = 'perez';
}

cambiarValorObjeto(persona)
console.log(persona)