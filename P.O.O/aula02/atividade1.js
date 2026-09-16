//Crie uma super classe e uma classe filha. 
//A classe veículo deverá ter os seguintes atributos:
//marca
//modelo
//ano
//placa
//cor
//proprietario

//a super classe deverá ter os seguintes métodos:
//mostrarDetalhes
//getProprietario
//setProprietario


//classe carro deverá ter o atributo : quantidade de portas, quantidade de passageiros, tipo (manual ou automático)

//classe moto deverá ter o atributo de cilindradas

//classe caminhão deverá ter o atributo de eixos

class Veiculo{
    #proprietario
    constructor(marca, ano, modelo, placa, proprietario){
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.placa = placa;
        this.#proprietario = proprietario
    }

    mostrarDetalhes(){
        this.marca;
        this.ano;
        this.modelo;
        this.placa;
        this.#proprietario;
    }

    getProprietario(){
        return this.#proprietario
    }

    setProprietario(proprietario){
        return this.#proprietario = proprietario
    }
}

class Carro extends Veiculo{
    constructor(marca, ano, modelo, placa, proprietario, qtdPortas, qtdPassageiros, tipo){
        super(marca, ano, modelo, placa, proprietario);
        this.qtdPortas = qtdPortas;
        this.qtdPassageiros = qtdPassageiros;
    }

     mostrarDetalhes(){
        console.log(`marca: ${this.marca}, ano: ${this.ano}, modelo: ${this.modelo}, placa: ${this.placa}, proprietario: ${this.getProprietario()}, quantidade de portas: ${this.qtdPortas}, quantidade de passageiros: ${this.qtdPassageiros}`)
    }
}

class Moto extends Veiculo{
    constructor(marca, ano, modelo, placa, proprietario, cilindradas){
        super(marca, ano, modelo, placa, proprietario);
        this.cilindradas = cilindradas
    }

     mostrarDetalhes(){
        console.log(`marca: ${this.marca}, ano: ${this.ano}, modelo: ${this.modelo}, placa: ${this.placa}, proprietario: ${this.getProprietario()}, cilindradas: ${this.cilindradas}`)
    }
}

class Caminhao extends Veiculo{
    constructor(marca, ano, modelo, placa, proprietario, eixos){
        super(marca, ano, modelo, placa, proprietario);
        this.eixos = eixos
    }

    mostrarDetalhes(){
        console.log(`marca: ${this.marca}, ano: ${this.ano}, modelo: ${this.modelo}, placa: ${this.placa}, proprietario: ${this.getProprietario()}, eixos: ${this.eixos}`)
    }
}

const carro = new Carro('xiaomi', 2026, 'primeiro', 'john', 4, 5, 'manual')
const moto = new Moto('xiaomi', 2026, 'primeiro', 'john', 4, 5, 125)
const caminhao = new Caminhao('xiaomi', 2026, 'primeiro', 'john', 4, 5, '4 eixos')

const array = [carro, moto, caminhao]

array.forEach(item => item.mostrarDetalhes())