const usuarios = [
    {
        nome: 'Carlos', 
        tencnologias: ['HTML', 'CSS'],
    },
    {
        nome: 'Jasmine',
        tencnologias: ['JavaScript', 'CSS'],
    },
    {
        nome: 'Tuane',
        tencnologias: ['HTML', 'Node.js']
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tencnologias.join(', ')}`)
}

