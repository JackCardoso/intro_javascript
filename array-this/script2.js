function calculaIdade(anos){
    return `Daqui a ${anos} anos. ${this.nome} terá ${this.idade + anos} anos de idade`;
}


const pessoa1= {
    nome: 'maria',
    idade: 32,
}
const pessoa2= {
    nome: 'carla',
    idade: 24,
}
const animal1= {
    nome: 'monstro',
    idade: 4,
    raca: 'pitbull',
}

console.log(calculaIdade.call(animal1, 3));
console.log(calculaIdade.apply(pessoa1, [20]));