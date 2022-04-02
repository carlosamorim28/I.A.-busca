export default class Produto {
    constructor({nome,valor}){
        this.nome = nome
        this.valor = valor 
        this.decisao = this.generateDecisao()
    }
    generateDecisao = ()=>{
        return Math.round(Math.random()) === 1
    }
}