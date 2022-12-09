function gerar() {
    let numero = Math.floor(Math.random() * 99) + 1;
    let msg = document.getElementById('msg')
    let sorteados = document.getElementById('sorteados')
    msg.innerHTML = `O número sorteado foi:`
    result.innerHTML = `👉${numero}👈`
    sorteados.innerHTML += `${numero}, `
    
}

function apagar() {
    msg.innerHTML = 'O número aparecerá aqui : <br> 👇  '
    result.innerHTML = ''
    sorteados.innerHTML = 'Números já sorteados aparecem aqui: 👉'

}