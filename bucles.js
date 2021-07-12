//EJERCICIO1)
//Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10). 


 /* for(let i=1;i<=10;i++){
    
    console.log(i);
    alert(i);
}  */

//EJERCICIO 2
// Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

/* let suma = 0;
let numero;

for(let i=0;i<5;i++){
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}

alert(suma);
 */
//EJERCICIO 3
// Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.

/* let suma = 0;
let numero;
let cantidad = parseInt(prompt("Ingrese cantidad de numeros"));
console.log(cantidad);

for(let i=0;i<cantidad;i++){
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}

alert(suma);  */

//EJERCICIO 4
// Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.

/* let suma=0;
let input;

while (input !==0 ){
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    console.log(input);
    suma = suma + input;
}
alert(suma);  */

//EJERCICIO 5
// Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.

/* let suma=0;
let input = true;
let contador=0;

while (input !==0 ){
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    suma = suma + input;
    contador = contador +1;
}
alert(suma/(contador-1));  */

// EJERCICIO 6
//Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 

 /* let numero = parseInt( prompt("ingrese un numero: "));
 for (i=1;i<=numero;i++){
     console.log(i);
 } */
      

//EJERCICIO7
//Realizar un programa que pida al usuario dos números y 
//muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 
/* let numero1=parseInt(prompt("ingrese el primero numero: "));
let numero2=parseInt(prompt("ingrese segundo numero: "));

for(i=numero1+1;i<numero2;i++){
    console.log(i)
} */



//EJERCICIO 8
//Preguntar al usuario cuántos números quiere ingresar. 
//Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.

/*  let mayor=0;
 let menor=0;
 let numerosIngresar=0;
 let i =1;
 let numeroTemporal=0;
 numerosIngresar= parseInt(prompt("Ingresar cantidad de numeros a ingresar: "));
 console.log(numerosIngresar);
 while (i <= numerosIngresar){
   numeroTemporal= parseInt( prompt("ingrese el numero" ));
   console.log(numeroTemporal);
   if(i==1){
       mayor=numeroTemporal;
       menor=numeroTemporal;
   }else 
        if(numeroTemporal > mayor){
       mayor=numeroTemporal
   }else
   if(numeroTemporal<menor){
       menor=numeroTemporal
   }
 i++;
 
   }alert("el numero menor es : "+ menor);
   alert("el numero mayor es : "+ mayor );
 
 */

//EJERCICIO 9
//Solicitar al usuario que ingrese la cantidad de números que quiera,
// uno por uno, y mostrar cual es el menor de todos.
 /* let numeroTempora0=parseInt(prompt("Ingrese un numero"))
 let menor=0;
 let i =1;
 let numeroTemporal=0;
 let flag= true;
 

 while (flag){
   numeroTemporal=prompt("ingrese otro numero , para finalizar ingrese una letra  " );
   if(isNaN(numeroTemporal)){
       flag=false;
   }else{
       numeroTemporal=parseInt(numeroTemporal)
       console.log(numeroTemporal);
     if(numeroTempora0<numeroTemporal){
       menor=numeroTempora0;
   }else {
       menor=numeroTemporal;
     }
   }
   i++;
 
   }alert("el numero menor es : "+ menor);
   */


//EJERCICIO 10
//Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, 
//la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

/* let num =0;
let asteriscos = 0;


num = prompt("Ingrese un numero");
console.log(num);
for ( asteriscos=1 ;asteriscos<=num;asteriscos++){
    console.log("*");
    
} */
//EJERCICIO 11
//Realizar un programa que pida la base y el exponente y calcule la potencia. 

/* let base = parseInt(prompt("ingrese base:"));
let exponente=parseInt(prompt("ingrese exponente:"));
let resultado=1;

for (i=0;i<exponente;i++){
    resultado=resultado*base;
} 
console.log(resultado)
  */


//EJERCICIO12 
//Realizar un programa que pida un número y calcule su factorial. 
// (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
/* let numero= parseInt(prompt("ingrese un numero para saber su fatorial: "));
let total = 1;
for (i=1;i<=numero;i++){
total=total*i;
}
console.log(total);

//EJERCICIO 13
//Realizar un programa que pida un número y diga todos sus divisores. 
//(Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
let numero =parseInt(prompt("Ingrese un numero"));
let divisor =0;
for (let i=1;i<=numero;i++){
    divisor+=1;
    if(numero%divisor===0){
        console.log(divisor + "es divisor de : "+ numero);
    }
} */

//EJERCICIO 14
//Solicitar al usuario que ingrese un número y una cadena de caracteres. 
//Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
//H
//O
//L
//A

* let numero=parseInt(prompt("ingrese un numero "));
let cadena =prompt("ingrese una cadena de caracteres");
for (let i =0;i<numero;i++){
    console.log(cadena.charAt(i));
}
*/

//EJERCICIO 15
//Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas.

/* let lista=String(prompt("Ingrese productos : "));
let num =0;
while (lista !==num){
    console.log("Reemplazamos espacios:" + lista.replaceAll(" ",","));
}

 */

//EJERCICIO 16 
//Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. 
//Mostrar todos los números ingresados.

/* let numero=parseInt(prompt("ingrese un numero : "));
while(numero%3!==0){
    console.log(numero);
    numero=parseInt(prompt("Ingrese un numero"));
}
 */
/* let numero=0;

do {
    numero=parseInt(prompt("ingrese un numero : "));
    console.log(numero);
}while(numero%3!==0)
 */



