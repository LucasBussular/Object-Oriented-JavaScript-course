import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User ("Lucas", "lucas@email.com", "1994-28-04", "admin");
// console.log(novoUser)
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin ("Jorge", "jorge@email.com", "1985-04-08");

// console.log(novoAdmin.exibirInfos())

// novoUser.nome acessa a SETTER "nome" e transforma o nome em "Marcelo":
novoUser.nome = "Marcelo";
console.log(novoUser.exibirInfos()) // Marcelo, lucas@email.com