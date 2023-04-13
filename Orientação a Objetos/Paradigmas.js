// O que é um paradigma de programação?
// é uma abordagem sobre como resolver problemas baseados em um conjunto de princípios

// Orientação a Objetos: princípio de espelhar o mundo real através de uma estrutura de OBJETOS com características (parâmetros)
// e ações (métodos) que interagem uns com os outros. Basicamente codificar coisas palpáveis em características e ações.
// EX: um gato com caracteríticas (sexo, idade, pelagem) e ações (miar, dormir, pular)

// const gato = {
//     nome: "gato",
//     nascimento: "28/04/2016",
//     pelagem: "mesclada",
//     status: {
//         castrada: true,
//         vacinada: true,
//         vermifugada: true
//     }
//     miar: function(){
//         console.log("miau")
//     }
// }

// A base para a OO é a criação de Classes (moldes de objetos). Sendo assim, se torna inviável criar um objeto para cada elemento e a crição 
// de objetos bases (classes) se tornam reproduzíveis. Criar um objeto a partir de uma classe se chama "criar instância".

// REVISÃO DE OBJETOS:

// Herança de protótipo: a classe é implementada em cima do modelo de herança de protótipo (acontece por baixo dos panos):  

const user = {
    nome: "Juliana",
    email: "ju@email.com",
    nascimento: "2000/05/09",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

user.exibirInfos();

