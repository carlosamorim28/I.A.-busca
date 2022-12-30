import Produto from "./Class/Produto"







const iteractionFunction = (produto,resultado,listaProdutosEsculhidos, listaVerificados) => {
    if (produto.decisao){
        resultado.soma = resultado.soma + produto.valor
        resultado.produto = resultado.produto * produto.valor
        listaProdutosEsculhidos.push()produto
    }
    
    return {resultado,listaProdutosEsculhidos}
}

const verificaLista = (listaProdutos = [], iteractionFunction= ()=>{}, resultado = {soma: 0,produto:1} ) =>{
    let listaProdutosEsculhidos = []
    listaProdutos.map((produto)=>{
        const result = iteractionFunction(produto,resultado,listaProdutosEsculhidos)
        
    })
    return {resultado,listaProdutosEsculhidos}
}

const validacao = (resultado,objetivo) => {
    return Math.abs(resultado.resultado.soma - objetivo)
}
const busca = async (valorObjetivo,preecheLista) => {
    let iteraçoes = 0
    let resultado = {soma: 0,produto:1}
    let result = verificaLista(preecheLista(),iteractionFunction)
    let objetivo = valorObjetivo
    let estadoAtual = 10000
    let validado = validacao(result,objetivo)
    let listasVerificadas = []
    let resposta = { nome:"",valor:0,decisao:true }
    const maxIteracoes = 2800
    while( iteraçoes < maxIteracoes && validado !== 0 ){
        result = verificaLista(preecheLista(),iteractionFunction)
        let valorTeste = validacao(result,objetivo)
        iteraçoes = iteraçoes + 1
        console.log(result)
        console.log("iterações: "+iteraçoes)

        if(valorTeste < estadoAtual){
            estadoAtual = valorTeste
            validado = valorTeste
            resposta = result
        }

    }
    resposta = {...resposta, distancia: estadoAtual, iteracoes: iteraçoes}
    console.log("-------------------------------------------")
//    console.log(resposta)
    return resposta
    
}

export default busca
