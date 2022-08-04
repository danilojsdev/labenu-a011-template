//AULA OBJETOS

//criando um objeto
const estudante = {
    nome:"Danilo",
    sobrenome:"José Silva",
    numeroMatricula:12318871,
    notasDoSemestre:[10, 9.6, 9.6]
}

console.log(estudante);
//cria a propriedade módulo (pois ela não existe dentro do objeto)
estudante.modulo = "git e terminal"
console.log('Objeto estudante com módulo', estudante);
//notação do ponto para acessar a propriedade do objeto

console.log("NOME", estudante.nome)
//acessat um indice do array dentro do objeto
console.log("SEGUNDA NOTA", estudante.notasDoSemestre[1])
//notação dos colchetes para acessar a propriedade do objeto
console.log("MODULO",estudante["modulo"])
// criando uma cópia e modificando uma propriedade

const novoEstudante = {...estudante, nome:"Astrodev"}

novoEstudante.nome = "Astrodev"

//forma com spread copia e já adiciona nova nota ao array
novoEstudante.notasDoSemestre = [...estudante.notasDoSemestre, 9]

// forma com slice() para copiar array e push() para adicionar no array
// novoEstudante.notasDoSemestre = estudante.notasDoSemestre.slice()
// novoEstudante.notasDoSemestre.push(9)

//modifica a propriedade módulo ( pois ela já existe dentro do objeto) 
novoEstudante["modulo"] = "introdução à web"

console.log("NOVO ESTUDANTE:", novoEstudante)

//criando array de objetos

const estudantesLabenu = []

estudantesLabenu.push(estudante, novoEstudante)



console.log("ARRAY INTEIRO",estudantesLabenu);
//primeira posição do array de estudantes, propriedade notasDoSemestre que é um array e terceira posição do array de notas 
console.log("PRIMEIRA POSIÇÂO", estudantesLabenu[0].notasDoSemestre[2]);
//segunda posição do array de estudantes, propriedade módulo
console.log("SEGUNDA POSIÇÂO",estudantesLabenu[1].modulo);