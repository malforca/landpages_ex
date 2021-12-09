document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu')
)

document.querySelector('#qtde').addEventListener('change', atualizarPreco)
document.querySelector('#js').addEventListener('change', atualizarPreco)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco)
document.querySelector('#prazo').addEventListener('change', function () {
    const prazo = document.querySelector('#prazo').value
    document.querySelector('label[for=prazo]').innerHTML = `Prazo : ${prazo} Semana(s)`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const layoutSim = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value

    let preco = qtde * 100;
    if (temJS) { preco *= 1.1 }
    if (layoutSim) { preco += 500 }
    let taxaDeUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaDeUrgencia

    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}

