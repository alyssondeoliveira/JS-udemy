let resp1 = document.querySelector('#outResp1')
let resp2 = document.querySelector('#outResp2')
let resp3 = document.querySelector('#outResp3')
let frm = document.querySelector('form')

frm.addEventListener("submit", (e) => {
    let veiculo = frm.inVeiculo.value
    let preco = Number(frm.inPreco.value)

    let entrada = preco * 0.50
    let parcela = entrada / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()
})