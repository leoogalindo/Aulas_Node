const nome = 'Leonardo'
const sobrenome = 'Galindo'

const falaNome = () => {
   return nome + ' ' + sobrenome
}

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquercoisa = 'O que eu quero exportar'

// console.log(exports)