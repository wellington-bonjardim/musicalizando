//----------------------- VARIÁVEIS -----------------------//
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

//----------------------- BANCO DE MÚSICAS -----------------------//
let bancoMusicas = [
    {titulo:'Somebody to Love', artista: 'Queen', src: 'musicas/Somebody to Love.mp3', img:'imagens/Somebody.jpg'},

    {titulo:'Plush', artista: 'Stone Temple Pilots', src: 'musicas/Plush (2017 Remaster).mp3', img:'imagens/plush.jpg'},

    {titulo:'Outshined', artista: 'Soundgarden', src: 'musicas/Soundgarden - Outshined.mp3', img:'imagens/outshined.jpg'},

    {titulo:'Bulls on Parade', artista: 'Rage Against the Machine', src: 'musicas/Bulls On Parade.mp3', img:'imagens/bulls.jpg'},

    {titulo:'Them Bones', artista: 'Alice in Chains', src: 'musicas/Them Bones.mp3', img:'imagens/dirt.jpg'},

    {titulo:'Dream On', artista: 'Aerosmith', src: 'musicas/Dream On.mp3', img:'imagens/Aerosmith.jpg'},

    {titulo:'Like a Stone', artista: 'Audioslave', src: 'musicas/Like a Stone.mp3', img:'imagens/Audioslave.jpg'},

    {titulo:'5 Minutes Alone', artista: 'Pantera', src: 'musicas/5 Minutes Alone.mp3', img:'imagens/5minutes.jpg'},

    {titulo:'Bohemian Rhapsody', artista: 'Queen', src: 'musicas/Bohemian Rhapsody.mp3', img:'imagens/Bohemian.jpg'},

    {titulo:'Dead and Bloated', artista: 'Stone Temple Pilots', src: 'musicas/Dead and Bloated.mp3', img:'imagens/plush.jpg'},

    {titulo:'Rusty Cage', artista: 'Soundgarden', src: 'musicas/Rusty Cage.mp3', img:'imagens/outshined.jpg'},

    {titulo:'Killing In the Name', artista: 'Rage Against the Machine', src: 'musicas/Killing In the Name.mp3', img:'imagens/Killing.jpg'},

    {titulo:'Man in the Box', artista: 'Alice in Chains', src: 'musicas/Man In the Box.mp3', img:'imagens/facelift.jpg'},

    {titulo:'Show me how to live', artista: 'Audioslave', src: 'musicas/show me.mp3', img:'imagens/Audioslave.jpg'},

    {titulo:'Hollow', artista: 'Pantera', src: 'musicas/Hollow.mp3', img:'imagens/Hollow.jpg'}

]

//----------------------- FUNÇÕES -----------------------//
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

//----------------------- EVENTOS -----------------------//
botaoPlay.addEventListener('click', tocarMusica)
botaoPausar.addEventListener('click', pausarMusica)
musica.addEventListener('timeupdate', tempoMusica)
musica.addEventListener('loadeddata', corrigeNAN)
botaoVoltar.addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        indexMusica = 14
    }
    botaoPlay.classList.remove('invisible')
    botaoPausar.classList.add('invisible')
    renderizarMusica(indexMusica)
})
botaoAvancar.addEventListener('click', () => {
    indexMusica++
    if(indexMusica > 14) {
        indexMusica = 0
    }
    botaoPlay.classList.remove('invisible')
    botaoPausar.classList.add('invisible')
    renderizarMusica(indexMusica)
})