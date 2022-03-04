const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const res = nomes.map ((nome) => nome.charAt(0))
console.log(res)

const valores = [1,2,3,4]
const soma = valores.reduce((ac,v) => ac + v, 0)
console.log(soma);


// const todosComecamComA = nomes.every(nome => nome.startswith("A"))
// console

/**
const nomes = ["ana maria"]