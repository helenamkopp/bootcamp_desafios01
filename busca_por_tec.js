const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    },
    {
        nome: 'Helena',
        tecnologias: ['Python', 'CSS']
    }
]

function checaTecdoUsuario(usuarios) { // primeiro criamos uma função que verifica se o usuario trabalha com CSS e depois chamamos ela no laço abaixo
    for(let tecnologia of usuarios.tecnologias){
        if(tecnologia == 'CSS') return true
    }
    return false
        }

for (let i = 0; i < usuarios.length; i++) { // essa parte significa que ele vai percorrer todo código até acabarem os usuarios - ou seja vai verificar um por um
    const usuarioTrabalhaComCSS = checaTecdoUsuario(usuarios[i]) // chamando a função para observar os usuarios na posição i (0,1,2.. conforme o número de usuários)

    if(usuarioTrabalhaComCSS) { //se o usuario trabalhar com CSS - se for true vai aparecer a mensagem abaixo:
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
        }
