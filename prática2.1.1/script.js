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
var quantidade = array.length - 1;
var totalY = 0;

do {
       totalY += array[quantidade];

}
while (quantidade--)
console.log("Soma de todos os números com DO/WHILE: ", totalY);

/*  Números menores que 40  */

console.log("Números menores que 40:  ");

var num = 1;

function numeros(num) {
       for (var num = 1; num < 40; divisor++)

              return true;
}

var determinadoNumero = 40;

for (var i = num; i < determinadoNumero; i++) if (numeros(i)) console.log(i);

/*  Números mairoes que 50  */

console.log("Números mairoes que 50:  ");

var num2 = 51;

function numeros(num) {
       for (var num2 = 51; num2 > 50; divisor++)

              return true;
}

var determinadoNumero = 100;

for (var i = num2; i < determinadoNumero; i++) if (numeros(i)) console.log(i);

// parar quando encontrar o pruimeiro número primo

console.log("Parar quando encontrar o primeiro número primo")

var firstnum = 3
var lastnum = 10

while (firstnum < lastnum) {
       firstnum % 1 === firstnum && firstnum % firstnum === 1 ? console.log('O número não é primo') : console.log('O número',(firstnum),' é primo')
       break;
}