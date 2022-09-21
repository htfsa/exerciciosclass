    var Cliente = /** @class */ (function () {
    function Cliente(nome, documento , genero) {

        this.nome = nome;
        this.cpf = documento;
        this.genero = genero;
    }

    
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    
    Cliente.prototype.getdocumento = function () {
        return this.documento;
    };
    
    Cliente.prototype.getgenero = function () {
        return this.genero;
    };
    return Cliente;
}());
var nome = prompt('digite seu nome');
var documento = prompt('digite seu documento');
var sexo = prompt('digite seu genero');
var cliente1 = new Cliente(nome, documento, genero);
console.log("Seu nome \u00E9 ".concat(cliente1.getNome()));
document.write("Seu nome \u00E9 ".concat(cliente1.getNome()));
console.log("Seu documento \u00E9 ".concat(cliente1.getdocumento()));
document.write("<br>Seu documento \u00E9 ".concat(cliente1.getdocumento()));
console.log("Seu genero \u00E9 ".concat(cliente1.getgenero()));
document.write("<br>Seu genero \u00E9 ".concat(cliente1.getgenero()));