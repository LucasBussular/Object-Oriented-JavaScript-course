import User from "./User.js";

 export default class Admin extends User {
    constructor (nome, email, nascimento, role = "admin", ativo = true) {
        super (nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

// const novoAdmin = new Admin ("Antônio", "antonio@email.com", "1997-25-08",);

// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("JavaScript", 50));