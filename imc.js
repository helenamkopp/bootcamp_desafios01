// Cálculo de IMC de individuos

const nome = "Helena";
const peso = 57;
const altura = 1.65;

const imc = peso / (altura * altura)

let message = ""

if(imc >= 30){
    message = `${nome}, você está acima do peso. Seu IMC é = ${imc}`
} else {
    message = `Parabéns ${nome}, você não está acima do peso. Seu IMC é = ${imc}`
}

console.log(message)

