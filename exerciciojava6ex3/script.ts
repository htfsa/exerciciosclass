class ProdutoEletronico{
    private nome: String;
    private preco: Number;
    private nome: string;
    private preco: number;
 
    constructor(nome: String, preco: Number){
    constructor(nome: string, preco: number){
       this.nome = nome;
       this.preco = preco;
    }
 
    // NOME
    public getNome(): String{
    public getNome(): string{
       return this.nome;
    }
 
    // PREÇO
    public getPreco(): Number{
    public getPreco(): number{
       return this.preco;
    }
 }
 
 const nome: String = prompt('diga o nome do produto: ');
 const preco: Number = Number(prompt('diga o preço: '));
 const nome: string = prompt('diga o nomr ');
 const preco: number = Number(prompt('diga qual o preço '));
 
 const produto: ProdutoEletronico = new ProdutoEletronico(nome, preco);