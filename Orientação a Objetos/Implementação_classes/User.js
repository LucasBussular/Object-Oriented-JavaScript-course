// essa clase será usada como protótipo e módulo para a criação de outras:
// "export default" é utilizado para exportar a classe e usar em outras partes do projeto

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

// Funções getters não recebem nenhum argumento, apenas retornam o que está dentro delas
// dentro das chaves podem ter lógicas condicionais. Porém, ao chamar a função ela é chamada
// como prodriedade de objetos, ou seja: "User.nome" ao invés de "User.nome()". Assim, quem chama por User.nome 
// nem ao menos sabe que a função "get" está codada.

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome (novoNome) {
        if (novoNome === "") {
            throw new console.error("Dado inválido");
        }
        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
    
}

// instanciando (criando novo usuário a partir da classe base):

// const novoUser = new User("Lucas", "lucas@email.com", "1994-28-04");
// console.log(novoUser.exibirInfos());