let PlayerButtonAtack

//se Incializa el JavaScript con una funcion que espera al usuario que apriente una opcion para disparar el juego
function gameLoading() {
    let buttonSelectMokepon = document.getElementById('button-select-mokepon') ;
    buttonSelectMokepon.addEventListener('click', PlayerChoise)
}
//Generador de numeros aleatorios
function num_random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//Desicion de la maquina para elegir que a la criatura mokepon que utliza se ejecuta despues de 
function randomMokeponChoise() {
    let rivalMokeponChoise = num_random(1,3) ;
    let RivalMokepon = document.getElementById('rival-mokepon-name') ;

    if (rivalMokeponChoise == 1) {
        RivalMokepon.innerHTML = '🔥Raditen'
        alert('Tú rival ha seleccionado a 🔥Raditen')
    } else if (rivalMokeponChoise == 2) {
        RivalMokepon.innerHTML = '💧Mizutana'
        alert('Tú rival ha seleccionado a 💧Mizutana')
    } else if (rivalMokeponChoise == 3) {
        RivalMokepon.innerHTML = "🌱Hanize"
        alert('Tú rival ha seleccionado a 🌱Hanize')
    }
}
// Botones de ataque
function PlayerAtack() {
    let playerButtonFire = document.getElementById('button-fire') ;
    let playerButtonWater = document.getElementById('button-water') ;
    let playerButtonPlant = document.getElementById('button-plant') ;
    
}
//Selecion del jugaro a la criatura llamada mokepon
function PlayerChoise() {
    let choiseRaditen = document.getElementById('Radinten') ;
    let choiseMizutana = document.getElementById('Mizutana') ;
    let choiseHanize = document.getElementById('Hanize') ;
    let PlayerMokepon = document.getElementById('player-mokepon-name') ;

    if (choiseRaditen.checked) {
        PlayerMokepon.innerHTML = '🔥Raditen'
        alert('Haz seleccionado a 🔥Raditen')
    } else if (choiseMizutana.checked) {
        PlayerMokepon.innerHTML = '💧Mizutana'
        alert('Haz seleccionado a 💧Mizutana')
    } else if (choiseHanize.checked) {
        PlayerMokepon.innerHTML = "🌱Hanize"
        alert('Haz seleccionado a 🌱Hanize')
    } else {
        alert('Seleccione un Mokepon Porfavor')
    }
    //Eleccion de la maquina
    randomMokeponChoise()
    //hora del combate
    PlayerAtack()
} 
//Se espera a que la pagina carge para luego correr el JavaScript
window.addEventListener('load', gameLoading)