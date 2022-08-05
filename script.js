let musica = document.querySelector('audio')
let botaoVoltar = document.querySelector('.botao-voltar')
let botaoPlay = document.querySelector('.botao-play')
let botaoPausar = document.querySelector('.botao-pause')
let botaoAvancar = document.querySelector('.botao-avancar')
let barraTempo = document.querySelector('progress')
let tempoDecorrido = document.querySelector('.inicio')
let tempoTotal = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

function tocarMusica() {
    musica.play()
    botaoPausar.classList.toggle('invisible')
    botaoPlay.classList.toggle('invisible')
}

function pausarMusica() {
    musica.pause()
    botaoPausar.classList.toggle('invisible')
    botaoPlay.classList.toggle('invisible')
}

function voltarMusica() {
    
}

function avancarMusica() {

}

function tempoMusica() {
    barraTempo.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

    tempoDecorrido.textContent = atualizaTempo(Math.floor(musica.currentTime))
}

function atualizaTempo(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    
    if(campoSegundos < 10 && campoMinutos < 10) {
        campoSegundos = '0' + campoSegundos
        campoMinutos = '0' + campoMinutos
    }
    
    return campoMinutos+':'+campoSegundos
}

function duracao() {
    tempoTotal.textContent = atualizaTempo(Math.floor(musica.duration))
    /*Essa função serviu para corrigir o bug do tempo total que estava aparecendo apenas NaN */
}

botaoPlay.addEventListener('click', tocarMusica)
botaoPausar.addEventListener('click', pausarMusica)
botaoVoltar.addEventListener('click', voltarMusica)
botaoAvancar.addEventListener('click', avancarMusica)
musica.addEventListener('timeupdate', tempoMusica)
musica.addEventListener('loadeddata', duracao)