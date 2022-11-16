// corrigindo erro prática 2.1.6 desafio 1° página

function confirmarDados(nome) {
    var nomeCompleto = nome + ' da Silva';
    var idade = 20;
    function getAnoNascimento() {
        var ano = 2022 - idade;
        return ano;
    }
    console.log('Nome completo:', nomeCompleto);
    console.log('Ano de nascimento:', getAnoNascimento());
    console.log('Sua idade é:', idade);
}
confirmarDados('Marcos');

console.log('///////////////////////////////////////////////////////////');
// Refatore o Código, trocando a palavra reservada de VAR para LET e CONST

function confirmarDados(nome) {
    let nomeCompleto = nome + ' da Silva';
    function getAnoNascimento() {
        let idade = 40;
        let ano = 2022 - idade;
        return ano;
    }
    let anoDeNascimento = getAnoNascimento();
    let geracao = 'Geração X';
    if (anoDeNascimento <= 1995) {

    }
    console.log('Nome Completo: ', nomeCompleto);
    console.log('Ano de Nascimento: ', anoDeNascimento);
    console.log('Geração: ', geracao);
}
confirmarDados('Marcos');


console.log('///////////////////////////////////////////////////////////');

// Refatore o Código, trocando a palavra reservada de VAR para LET e CONST

try {
    
} catch (error) {
    console.error('Um erro foi encontrado e não foi possível concluir a operação')
    
} finally {
    function confirmarDadosx(nomex){
        var nomeCompletoA = nomex + ' da Silva';
        function getAnoNascimentox() {
            var idadex = 20;
            var anox = 2022 - idadex;
            return anox;
        }
        console.log('nome completo', nomeCompletoA);
            console.log('ano de nascimento', getAnoNascimentox());
            console.log('idade', idadex);
         }
         confirmarDadosx('Marcos');
}


