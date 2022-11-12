/*     faça a soma de todos os numeros usando:
       12, 6, 9, 42, 11, 102, 44, 15     
       
       FOR                      */

var list = [12, 6, 9, 42, 11, 102, 44, 15];
var total = 0;
for (var i = 0; i < list.length; total = total + list[i++]) {
}
console.log("Soma de todos os números com /FOR: ", total);

/*     faça a soma de todos os numeros usando:
       12, 6, 9, 42, 11, 102, 44, 15     
       
       WHILE                     */

var soma = 0;
var array = [12, 6, 9, 42, 11, 102, 44, 15]
var quantidade = array.length;
var totalX = 0;

while (quantidade--) {
   totalX += array[quantidade];
}
console.log("Soma de todos os números com /WHILE: ", totalX);


/*     faça a soma de todos os numeros usando:
       12, 6, 9, 42, 11, 102, 44, 15     
       
       DO WHILE                    */

var soma = 0;
var array = [12, 6, 9, 42, 11, 102, 44, 15]
var quantidade = array.length-1;
var totalY = 0;

do {
   totalY += array[quantidade];
   
}
while (quantidade--)
console.log("Soma de todos os números com DO/WHILE: ", totalY);