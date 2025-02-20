let res1 = document.querySelector("h3")
let res2 = document.querySelector("h4")
let frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    let titulo = frm.inTitulo.value
    let duracao = Number(frm.inDuracao.value)

    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60

    res1.innerText = titulo
    res2.innerText = `${horas} hora(s) e ${minutos} minutos`

    e.preventDefault()
})