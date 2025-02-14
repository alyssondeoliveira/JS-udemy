let valorFinal = []
function cadastrar() {
    if (produto) {
        let produto = document.getElementById('produto').value
        let lista = document.getElementById('lista')
        let item = document.createElement('li')
        let preco = document.getElementById('preco').value
        let valor = Number(preco)
        valorFinal.push(valor)
        lista.appendChild(item)
        item.innerHTML = `${produto} - R$${valor.toFixed(2)}`
        

    }
    produto.value = ''
    produto.focus()
    preco.value = ''
}
function valorTotal(){
    let soma = 0
    for(let i = 0; i < valorFinal.length; i++){
        soma += valorFinal[i]
    }
    let res = document.getElementById('res')
    res.innerHTML = `Valor Total: R$${soma.toFixed(2)}`
}
