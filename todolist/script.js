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
        item.innerHTML = `${produto} - R$ ${valor.toFixed(2)}  `
        

        let remover = document.createElement('span')
        remover.textContent = '❌'
        remover.className = 'remover'
        lista.appendChild(remover)
        remover.onclick = function(event) {
            event.stopPropagation()
            lista.removeChild(item) 
            lista.removeChild(remover)
            res.innerHTML = ''
        }
 
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
    res.innerHTML = `Valor Total: R$ ${soma.toFixed(2)}`
}
