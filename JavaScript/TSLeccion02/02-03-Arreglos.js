//Creacion de Array o arreglos
//let autos = new Array("Mercedes","Ferrari","BMW"); Esta es la sintaxis vieja
const autos = ["Mercedes","Ferrari","BMW"];
console.log(autos);

//Recorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2])

for(let i = 0; i <autos.length; i++){
    console.log(i+" : "+autos[i])
}

//Modificamos los elementos de los arreglos
autos[1] = 'Renault';
console.log(autos);

//Agregamos nuevos valores al arreglo
autos.push('Audi'); //Agregamos un nuevo elemento al final de la lista
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forma de agregar elementos teniendo cuidado
autos[7] = 'Volvo';
console.log(autos);

// Como preguntar si es un Array/Arreglo
console.log(Array.isArray(autos));//Devuelve un resultado booleano


console.log(autos instanceof Array);//Preguntamos si la variable es una instancia de array