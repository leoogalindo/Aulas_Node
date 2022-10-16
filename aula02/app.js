// const multiplicacao = require('./mod')
// console.log(multiplicacao(2,2))
// const Cachorro = require('./B/C/D/mod')
// const c1 = new Cachorro('Lala')
// c1.latir()

const Cachorro = require('./Z/mod2')
const c2 = new Cachorro('luis')
c2.latir()

const path = require('path')

console.log(path.resolve(__dirname, '..' , '..'))
console.log(__filename)
console.log(__dirname)