// Cálculo simples de aposentadoria de indíviduos.. considerando poucas variaveis. :)

const nome = 'Helena';
const sexo = 'F';
const idade = 24;
const contribuicao = 1;

const soma_do_tempo = idade + contribuicao

const mulher_apta = sexo === 'F' && contribuicao >= 30 && soma_do_tempo >= 85
const homem_apto = sexo === 'M' && contribuicao >= 35 && soma_do_tempo >= 95

if( mulher_apta || homem_apto ){
    console.log(`${nome}, você já pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não atende algum dos requisitos.. não poderá se aposentar.`)
}