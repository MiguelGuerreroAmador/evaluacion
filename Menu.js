console.log(`ingresa el número de una opcion:
1) Suma
2) Resta
3) Multiplicacion
4) División
5) Raíz cuadrada
6) Formula general
7) Binomio cuadrado perfecto`);

var opcion = parseInt(prompt("selecciona una opcion:"));

switch (opcion) { 
case 1: 	
   
var N1 = parseInt(prompt("Ingresa el numero:"));
var N2 = prompt("Ingresa el otro numero:");
      function imsuma(){
 var suma = N1 + parseInt(N2);
console.log(`${suma}`);
 }
imsuma();
 break;



case 2:
var N1 = parseInt(prompt("Ingresa el numero:"));
var N2 = prompt("ingresa el otro numero:");
       function imresta(){
var resta = N1 - parseInt(N2);
     
console.log(`${resta}`);
}
imresta();
break;



case 3:
var N1 = parseInt(prompt("Ingresa el numero:"));
var N2 = prompt("ingresa otro numero:");
      function immultiplicacion(){
var multi = N1 * parseInt(N2);
console.log(`${multi}`);
 }
immultiplicacion();
break; 



case 4:       
var N1 = parseInt(prompt("ingresa el numero:"));
var N2 = prompt("ingresa otro numero:");
      function imdivicion(){
var divi = N1 / parseInt(N2); 
if (Numero2 == 0){
console.log("La Division no se pudo realizar");   
 }else{
console.log(`${divi}`);   
 }}
imdivicion();
break;  



case 5:
var N1 = parseInt(prompt("Ingresa un numero:"));
      function imraiz(){
var raiz = Math.sqrt(N1);
console.log(`${raiz}`);
 }
imraiz();
break; 



case 6:
var n1 = parseInt(prompt("Ingresa el primer valor"));
var n2 = prompt("Ingresa el segundo valor");
var n3 = prompt("Ingresa el tercer valor");
      function imecuacion(){
var rcuacion = (n2*n2) - 4*(n1*n3) ;

if(rcuacion>0){
X1=(-n2 + Math.sqrt(rcuacion))/2*n1;
X2=(-n2 - Math.sqrt(rcuacion))/2*n1;
console.log("La ecuacion tiene dos soluciones.");  
console.log(`X1= ${X1}`);
console.log(`X2= ${X2}`);
    
 }else if(res==0){
X1=(-n2 + Math.sqrt(rcuacion))/2*n1;
console.log("La ecuacion tiene una solucion.");
console.log(`X1= ${X1}`);
 }else{
console.log("La ecuacion no tiene solucion.");
}}
imecuacion();
 break; 



case 7:
var n1= parseInt(prompt("Ingresa el valor de a"));
var n2= prompt("ingresa el valor de b");
      function imperfecto(){
var rperfecto = (n1*n1)+ (2*n1*n2)+(n2*n2);
console.log(`${resperfecto}`);
}
imperfecto();
break;

default: 
console.log('NO SE EJECUTO NINGUNA DE LAS OPCIONES'); 
}