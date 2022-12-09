function gerar() {
    let numero = Math.floor(Math.random() * 99) + 1;
    let msg = document.getElementById('msg')
    msg.innerHTML = `O número sorteado foi:`
    result.innerHTML = `${numero}`
    
}

function apagar() {
    msg.innerHTML = 'O número aparecerá aqui:'
    result.innerHTML = ''
}