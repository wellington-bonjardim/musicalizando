//----------------------- VARIÁVEIS ----------------------- //
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
let indexMusica = 0

//----------------------- BANCO DE MÚSICAS ----------------------- //
let bancoMusicas = [
    {titulo:'Plush', artista: 'Stone Temple Pilots', src: 'musicas/Plush (2017 Remaster).mp3', img:'imagens/plush.jpg'},

    {titulo:'Outshined', artista: 'Soundgarden', src: 'musicas/Soundgarden - Outshined.mp3', img:'imagens/outshined.jpg'},

    {titulo:'Bulls on Parade', artista: 'Rage Against the Machine', src: 'musicas/Rage Against The Machine - Bulls On Parade (Official Music Video).mp3', img:'imagens/bulls.jpg'}
]

//----------------------- FUNÇÕES ----------------------- //
function renderizarMusica(index) {
    musica.setAttribute('src', bancoMusicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = bancoMusicas[index].titulo
        nomeArtista.textContent =  bancoMusicas[index].artista
        imagem.src =  bancoMusicas[index].img
        tempoTotal.textContent = atualizaTempo(Math.floor(musica.duration))   
    })
}

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

function tempoMusica() {
    barraTempo.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

    tempoDecorrido.textContent = atualizaTempo(Math.floor(musica.currentTime))
}

function atualizaTempo(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }
    if(campoMinutos < 10) {
        campoMinutos = '0' + campoMinutos
    }

    return campoMinutos+':'+campoSegundos
}

function corrigeNAN() {
    tempoTotal.textContent = atualizaTempo(Math.floor(musica.duration))
}

//----------------------- EVENTOS ----------------------- //
botaoPlay.addEventListener('click', tocarMusica)
botaoPausar.addEventListener('click', pausarMusica)
musica.addEventListener('timeupdate', tempoMusica)
musica.addEventListener('loadeddata', corrigeNAN)
botaoVoltar.addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        indexMusica = 2
    }
    botaoPlay.classList.remove('invisible')
    botaoPausar.classList.add('invisible')
    renderizarMusica(indexMusica)
})
botaoAvancar.addEventListener('click', () => {
    indexMusica++
    if(indexMusica > 2) {
        indexMusica = 0
    }
    botaoPlay.classList.remove('invisible')
    botaoPausar.classList.add('invisible')
    renderizarMusica(indexMusica)
})