var Funcionario = /** @class */ (function () {
    function Funcionario(nome, empresa, funcao, salario) {
        this.nome = nome;
        this.empresa = empresa;
        this.funcao = funcao;
        this.salario = salario;
    }
    // Retorna nome
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    // Retorna empresa
    Funcionario.prototype.getEmpresa = function () {
        return this.empresa;
    };
    // Retorna função
    Funcionario.prototype.getFuncao = function () {
        return this.funcao;
    };
    // Retorna o salário
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    return Funcionario;
}());
var nome = prompt('diga o seu nome: ');
var empresa = prompt('diga o nome do seu empregador: ');
var funcao = prompt('digite a função do seu setor: ');
var salario = Number(prompt('diga quanto você ganha ? '));
var funcionario = new Funcionario(nome, empresa, funcao, salario);
console.log('informaçoes do funcionário:\n');
document.write('dados do funcionário:');
console.log("nome: ".concat(funcionario.getNome()));
document.write("<br>nome: ".concat(funcionario.getNome()));
console.log("empresa empregadora ".concat(funcionario.getEmpresa()));
document.write("<br>empresa empregadora: ".concat(funcionario.getEmpresa()));
console.log("Fun\u00E7\u00E3o na empresa: ".concat(funcionario.getFuncao()));
document.write("<br>Fun\u00E7\u00E3o na empresa: ".concat(funcionario.getFuncao()));
console.log("Sal\u00E1rio: ".concat(funcionario.getSalario()));
document.write("<br>Sal\u00E1rio: ".concat(funcionario.getSalario()));