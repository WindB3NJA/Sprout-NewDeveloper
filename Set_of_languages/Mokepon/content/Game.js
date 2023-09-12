let playerAtack
let playerBattleLife = 3 ;
let rivalAtack
let rivalBattleLife = 3 ;
//se Incializa el JavaScript con una funcion que espera al usuario que apriente una opcion para disparar el juego
function gameLoading() {
    let buttonSelectMokepon = document.getElementById("button-select-mokepon") ;
    buttonSelectMokepon.addEventListener("click", PlayerChoise)
    
    let playerButtonFire = document.getElementById("button-fire") ;
    playerButtonFire.addEventListener("click", PlayerButtonFire)
    let playerButtonWater = document.getElementById("button-water") ;
    playerButtonWater.addEventListener("click", PlayerButtonWater)
    let playerButtonPlant = document.getElementById("button-plant") ;
    playerButtonPlant.addEventListener("click", PlayerButtonPlant)
}
//Desicion de la maquina para elegir que a la criatura mokepon que utliza se ejecuta despues de 
function randomMokeponChoise() {
    let rivalMokeponChoise = num_random(1,3) ;
    let RivalMokepon = document.getElementById("rival-mokepon-name") ;

    if (rivalMokeponChoise == 1) {
        RivalMokepon.innerHTML = "🔥Raditen"
        alert("Tú rival ha seleccionado a 🔥Raditen")
    } else if (rivalMokeponChoise == 2) {
        RivalMokepon.innerHTML = "💧Mizutana"
        alert("Tú rival ha seleccionado a 💧Mizutana")
    } else if (rivalMokeponChoise == 3) {
        RivalMokepon.innerHTML = "🌱Hanize"
        alert("Tú rival ha seleccionado a 🌱Hanize")
    }
}
//Generador de numeros aleatorios
function num_random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//Selecion del jugaro a la criatura llamada mokepon
function PlayerChoise() {
    //Reinicio de vidas
    playerBattleLife = 3 ;
    rivalBattleLife = 3 ;
    //elecion del Mokepon
    let choiseRaditen = document.getElementById("Radinten") ;
    let choiseMizutana = document.getElementById("Mizutana") ;
    let choiseHanize = document.getElementById("Hanize") ;
    let PlayerMokepon = document.getElementById("player-mokepon-name") ;

    if (choiseRaditen.checked) {
        PlayerMokepon.innerHTML = "🔥Raditen"
        alert("Haz seleccionado a 🔥Raditen")
    } else if (choiseMizutana.checked) {
        PlayerMokepon.innerHTML = "💧Mizutana"
        alert("Haz seleccionado a 💧Mizutana")
    } else if (choiseHanize.checked) {
        PlayerMokepon.innerHTML = "🌱Hanize"
        alert("Haz seleccionado a 🌱Hanize")
    } else {
        alert("Seleccione un Mokepon Porfavor")
    }
    //Eleccion de el rival
    randomMokeponChoise()
}
//Boton de fuego
function PlayerButtonFire() {
    playerAtack = "Fuego 🔥"
    rivalAtackChoise()
}
//Boton de agua
function PlayerButtonWater() {
    playerAtack = "Agua 💧"
    rivalAtackChoise()
}
//Boton de planta
function PlayerButtonPlant() {
    playerAtack = "Planta 🌱"
    rivalAtackChoise()
}
//Ataque de el rival
function rivalAtackChoise() {
    rivalAtackRandomChoise = num_random(1,3) ;
    
    if (rivalAtackRandomChoise == 1){
        rivalAtack = "Fuego 🔥"
    } else if (rivalAtackRandomChoise == 2){
        rivalAtack = "Agua 💧"
    } else if (rivalAtackRandomChoise == 3){
        rivalAtack = "Planta 🌱"
    }
    gameBattleStatus()
}
//generador de mensajes de la batalla
function gameBattleStatus(){
    let gameBattleResults = "" 
    if (playerAtack == rivalAtack) {
        gameBattleResults = "¡Un empate de Elementos! 😲"
    } else if (playerAtack == "Fuego 🔥" && rivalAtack == "Agua 💧") {
        gameBattleResults = "Te han apagado 😰, ¡Haz Perdido esta ronda!"
        playerBattleLife--
    } else if (playerAtack == "Agua 💧" && rivalAtack == "Planta 🌱") {
        gameBattleResults = "Te han absorido para sus nutrientes 🚱, ¡Haz Perdido esta ronda!"
        playerBattleLife--
    } else if (playerAtack == "Planta 🌱" && rivalAtack == "Fuego 🔥") {
        gameBattleResults = "Te han chamuscado 🥵, ¡Haz Perdido esta ronda!"
        playerBattleLife--
    } else if (playerAtack == "Agua 💧" && rivalAtack == "Fuego 🔥") {
        gameBattleResults = "Apagaste el incendio 💦, ¡Haz Ganado esta ronda!"
        rivalBattleLife--
    } else if (playerAtack == "Planta 🌱" && rivalAtack == "Agua 💧") {
        gameBattleResults = "Que sediento estabas 🤤, ¡Haz Ganado esta ronda!"
        rivalBattleLife--
    } else if (playerAtack == "Fuego 🔥" && rivalAtack == "Planta 🌱") {
        gameBattleResults = "Leña para el asado 🔥, ¡Haz Ganado esta ronda!"
        rivalBattleLife--
    } 

    let gameMessageAtack  = document.getElementById("messages");
    let BattleString = document.createElement("p");
    BattleString.innerHTML = "Tú mascota Ataco con "+ playerAtack +", La mascota del Rival Ataco con "+ rivalAtack +" - "+ gameBattleResults
    gameMessageAtack.appendChild(BattleString);
    //Sistema de vidas 
    let playerStringLife = document.getElementById("player-life");
    playerStringLife.innerHTML = playerBattleLife
    let rivalStringLife = document.getElementById("rival-life");
    rivalStringLife.innerHTML = rivalBattleLife
}
//Se espera a que la pagina carge para luego correr el JavaScript
window.addEventListener("load", gameLoading)