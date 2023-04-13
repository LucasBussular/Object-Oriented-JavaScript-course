import User from "./User.js";

export default class Docente extends User {
    constructor (nome, email, nascimento, role = "docente", ativo = true) {
        super (nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `${estudante} aprovado no curso ${curso}!`
    }
}

// const novoDocente = new Docente("Rodrigo", "rodrigo@email.com", "1998-05-07");
// console.log(novoDocente.aprovaEstudante("Fernando", "JS"));