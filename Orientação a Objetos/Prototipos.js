const user = {
    nome: "Mariana",
    email: "mari@email.com",
    nascimento: "28/04/1994",
    role: "estudante",
    ativo: true,

    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Marcos",
    email: "marcos@email.com",
    role: "admin",
    criarCurso() {
        console.log("curso criado")
    }
}

// O "user" é o objeto mais básico de utilização do site. Sendo assim, o "admin" deve herdar todas as suas 
// caracteríticas e adicionar algumas que cabem somente a ele. Para isso, usa-se o "setPrototypeOf":

Object.setPrototypeOf(admin, user)
//                    o primeiro parâmetro é o objeto que vai herdar e o segundo é quem passa a herança

admin.criarCurso();
admin.exibirInfos();
console.log(admin); // apesar de ter herdado o "exibirInfos" do user, quando mostrado o objeto "admin"
//                     não apresenta essa função


// .................................................................................................................................

// MÉTODO NEW X MÉTODO OBJECT.CREATE:

// Antes da atualização do JavaScript de 2015, na qual houve a implementação de Classes, eram usadas as FUNÇÕES CONSTRUTORAS
// para criar objetos prototipados:

// função construtora de um user padrão:
function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

// crio um novo user usando o método NEW:
const novoUser = new User("Lucas", "lucas@rmail.com")
console.log(novoUser.exibirInfos())

function Admin (role) {
    User.call(this, "Juliana", "ju@email.com")
    this.role = role || "estudante"
}


// Aqui, o protótipo de ADMIN recebe o protótipo de USER como base de sua criação, herdando os métodos e parâmetros
// Como ADMIN e USER foram criadas a partir de uma função construtora, é preciso usar o .prototype (que gera um objeto):
Admin.prototype = Object.create(User.prototype);
const User02 = new Admin ("admin");
console.log(User02.exibirInfos())

// Então: quando é usada uma função construtora (como no caso Admin), todo novo objeto criado a partir dela (como no casdo User02) 
// tem como protótipo o OBJETO Admin.prototype. Assim, para acessar o objeto prototipo: Admin.prototype.algumaCoisa

// Criando a partir de objetos diretamente:

const user3 = {
    // init é usado como uma função construtora dentro de um objeto prototipo
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome
    }
}

const novoUser2 = Object.create(user3);
novoUser2.init("Julio", "julio@email.com")
console.log(novoUser2.exibirInfos())

//.....................................................................................................................................

// MÓDULOS E REUTILIZAÇÃO DE CÓDIGO:

// É possível criar um código para ser utilizado como protótipo e reutilizá-lo em outras partes do projeto sem reescreve-lo.
// O modelo de modulação mais adotado é o EcmaScript Mode (ou ESM). 
// Nele usamos a sintaxe "export" ou "export default" e a importação com a sintaxe "import <nomeModulo> from './caminho/arquivo.js'"
// Neste arquivo, a exemplificação deste método está localizada dentro do diretório: Implementação_classes

//.....................................................................................................................................

//ENCAPSULAMENTO:

// Encapsulamento:::: ação de esconder atributos de uma classe para que ela não seja utilizada da forma errada (alguém tentar alterar algum dado
// que não pode ser alterado em outra parte do código (nome do usuário, por exemplo))
// A aplicação dos conceitos de encapsulamento foram executados no mesmo diretório dos MÓDULOS:  Implementação_classes 

// Para que uma propriedade seja privada, a variável deve ser declarada antes do constructor e, dentro do constructor, com uma #:

// class admin {
//     #nome (VARIÁVEL DECLARADA E ANTECEDIDA POR #)
//     #email
//     constructor(nome, email) {
//         this.#nome = nome (VARIÁVEL DECLARADA NORMALMENTE DENTRO DO CONSTRUCTOR COM A #)
//         this.#email = email
//     }
// }

// GETTER:::: Para acessar informações privadas dentro de uma classe, usamos os "getters". Getters em JavaScript são métodos especiais que permitem que 
// você acesse os valores de propriedades de um objeto como se estivesse acessando um atributo. Eles são usados para obter o valor de uma 
// propriedade privada de um objeto, ou para calcular o valor de uma propriedade com base em outras propriedades do objeto. Por exemplo:

// class User {
//     #nome
//     #email
//     #nascimento
//     #role
//     #ativo
//     constructor(nome, email, nascimento, role, ativo = true) {
//         this.#nome = nome
//         this.#email = email
//         this.#nascimento = nascimento
//         this.#role = role || 'estudante'
//         this.#ativo = ativo
//     }


//     Assim, apesar do "nome" estar privado, quando outra classe que usa User como protótipo puxar a var "nome", ela estará livre para ser usada.
//      get nome() {
//     return this.#nome
// }
// }

// SETTER:::: Setters em JavaScript são métodos especiais que permitem que você defina o valor de propriedades de um objeto como se estivesse 
// definindo um atributo. Eles são usados para alterar o valor de uma propriedade privada de um objeto ou para validar o valor de uma
//  propriedade antes de defini-la.


//.....................................................................................................................................


// POLIMORFISMO:

// é a possibilidade de subclasses usarem métodos do protótipo, mas com comportamentos diferentes sob a mesma assinatura.

//SOLID: conjunto de design de códigos orientados ao objeto:

//S (Single responsibility principle - principio da responsabilidade única):::: Cada parte do código é responsável por apenas uma coisa.

//O (Open/Closed Principle):::: a possibilidade de expandir à classe sem alterá-la (só aumentar, não deletar)

//L (Liskov Substitution Principle):::: se uma classe tem um atributo, sua sub-classe também deve ter (se funciona na classe, deve funcionar na sub)

//I (Interface Segregation Principle):::: não podemos impor a implementação de métodos que não vao ser necessários

//D (Dependency Inversion Principle):::: módulos, ha hierarquia de classes, não pode depender de nada que está abaixo dele



