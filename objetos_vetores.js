const empresa = [
    {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco: {
            rua: 'Guilherme Gembala',
            num: 260
        }
    }
]

const dados = `A empresa ${empresa[0].nome} está localizada na Rua ${empresa[0].endereco.rua}, ${empresa[0].endereco.num}`

console.log(dados)
