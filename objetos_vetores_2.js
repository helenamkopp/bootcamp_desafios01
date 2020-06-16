const dados = 
    {
    nome: 'Helena',
    idade: 24,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop' 
        },
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
    
    }


const print = `A usuária ${dados.nome} tem ${dados.idade} anos e usa a tecnologia ${dados.tecnologias[0].nome} com especialidade em ${dados.tecnologias[0].especialidade}`

console.log(print)