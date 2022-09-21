class Funcionario{
    private nome: string;
    private empresa: string;
    private funcao: string;
    private salario: number;

    constructor(nome: string, empresa: string, funcao: string, salario: number){
       this.nome = nome;
       this.empresa = empresa;
       this.funcao = funcao;
       this.salario = salario;
    }

    // Retorna nome
    public getNome(): string{
       return this.nome;
    }

    // Retorna empresa
    public getEmpresa(): string{
       return this.empresa;
    }

    // Retorna função
    public getFuncao(): string{
       return this.funcao;
    }

    // Retorna o salário
    public getSalario(): number{
       return this.salario;
    }
 }

 const nome = prompt('diga seu nome: ');
 const empresa = prompt('diga o nome da sua empregadora: ');
 const funcao = prompt('diga o seu cargo na empresa: ');
 const salario = Number(prompt('diga seu salario: '));

 const funcionario: Funcionario = new Funcionario(nome, empresa, funcao, salario);

 console.log('dados do colaborador:\n');
 document.write('dados do colaborador:','<br>');

 console.log(`nome: ${funcionario.getNome()}`);
 document.write(`<br>nome: ${funcionario.getNome()}`);

 console.log(`empresa que trabalha: ${funcionario.getEmpresa()}`);
 document.write(`<br>empresa que trabalha: ${funcionario.getEmpresa()}`);

 console.log(`função no seu setor: ${funcionario.getFuncao()}`);
 document.write(`<br>fução no seu setor: ${funcionario.getFuncao()}`);

 console.log(`salário: ${funcionario.getSalario()}`);
 document.write(`<br>salário: ${funcionario.getSalario()}`);