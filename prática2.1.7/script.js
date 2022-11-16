//função para calcular aumento de salário

function Aumento() {
    var salario = parseInt(prompt("digite seu salário: "));
    
    var salarioIntermediario = (salario > 1501) || (salario < 2000)
    var salarioInferior = salario < 1500;
    var salarioAlto = salario < 3001;
    var salarioacima = (salario > 2001) || (salario < 3000);
    

    switch (salarioInferior, salarioIntermediario, salarioacima, salarioAlto) {
        case salarioInferior: console.log("Seu salário foi inferior a média ", salario)
            break;
        case salarioIntermediario: console.log("Seu salário foi inferior ao salário acima da média: ", salario)
            break;
        case salarioacima: console.log("Seu salário foi inferior aos salário Altos: ", salario)
            break;
        case salarioAlto: console.log("Seu asalário foi Alto: ", salario)
            break;
    }
}
Aumento();