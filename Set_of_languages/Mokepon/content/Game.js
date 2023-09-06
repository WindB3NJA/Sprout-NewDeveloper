function gameLoading() {
    let buttonSelectMokepon = document.getElementById('button-select-mokepon')
    buttonSelectMokepon.addEventListener('click', PlayerChoise)
}

function PlayerChoise() {
    let choiseRaditen = document.getElementById('Radinten')
    let choiseMizutana = document.getElementById('Mizutana')
    let choiseHanize = document.getElementById('Hanize')
    let PlayerMokepon = document.getElementById("player-mokepon")

    if(choiseRaditen.checked) {
        PlayerMokepon.innerHTML = '🔥Raditen'
        alert('Haz seleccionado a 🔥Raditen')
    }
    else if(choiseMizutana.checked) {
        PlayerMokepon.innerHTML = '💧Mizutana'
        alert('Haz seleccionado a 💧Mizutana')
    }
    else if(choiseHanize.checked) {
        PlayerMokepon.innerHTML = "🌱Hanize"
        alert('Haz seleccionado a 🌱Hanize')
    }else{
        alert('Seleccione un Mokepon Porfavor')
    }
} 

window.addEventListener('load', gameLoading)