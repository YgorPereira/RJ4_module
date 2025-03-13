class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = new Set();
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }

    get nomeUpperCase() {
        return this.nome.toUpperCase()
    }

    get nomeLowerCase() {
        return this.nome.toLowerCase()
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero
    }
}

class Endereco {
    constructor(numero, rua, cidade, estado){
        this.numero = numero;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    get ruaUpperCase() {
        return this.rua.toUpperCase()
    }

    get ruaLowerCase() {
        return this.rua.toLowerCase()
    }

    get cidadeUpperCase() {
        return this.cidade.toUpperCase()
    }

    get cidadeLowerCase() {
        return this.cidade.toLowerCase()
    }

    get estadoUpperCase() {
        return this.cidade.toUpperCase()
    }
    
    get estadoLowerCase() {
        return this.cidade.toLowerCase()
    }

    get enderecoCompleto() {
        return `${this.rua}, ${this.numero}, ${this.bairro}, ${this.cidade}, ${this.cep}`
    }

    get enderecoCompletoUpperCase() {
        return `${this.ruaUpperCase}, ${this.numero}, ${this.bairroUpperCase}, ${this.cidadeUpperCase}, ${this.estadoUpperCase}, ${this.cep}`
    }

    get enderecoCompletoLowerCase() {
        return `${this.ruaLowerCase}, ${this.numero}, ${this.bairroLowerCase}, ${this.cidadeLowerCase}, ${this.estadoLowerCase} ${this.cep}`
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get razaoSocialUpperCase() {
        return this.razaoSocial.toUperCase();
    }

    get razaoSocialLowerCase() {
        return this.razaoSocial.toLowerCase();
    }

    get nomeFantasiaUpperCase() {
        return this.nomeFantasia.toUperCase();
    }

    get nomeFantasiaLowerCase() {
        return this.nomeFantasia.toLowerCase();
    }

    get cnpj() {
        return this.#cnpj
    }
}

export default { Cliente, Telefone, Endereco, Empresa}