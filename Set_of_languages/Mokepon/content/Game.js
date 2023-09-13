//Jugador
let playerAtack
let playerBattleLife = 3 ;
//Rival
let rivalAtack
let rivalBattleLife = 3 ;
//se Incializa el JavaScript con una funcion que espera al usuario que apriente una opcion para disparar el juego
function gameLoading() {
    //Boton para verificar si el usuario al haber tocado ya click en mokepon y al boton de confirmar seleccione el mokepon
    let buttonSelectMokepon = document.getElementById("button-select-mokepon") ;
    buttonSelectMokepon.addEventListener("click", PlayerChoise)
    //Botones de seleccion de ataque
    let playerButtonFire = document.getElementById("button-fire") ;
    playerButtonFire.addEventListener("click", PlayerButtonFire)
    let playerButtonWater = document.getElementById("button-water") ;
    playerButtonWater.addEventListener("click", PlayerButtonWater)
    let playerButtonPlant = document.getElementById("button-plant") ;
    playerButtonPlant.addEventListener("click", PlayerButtonPlant)
    //Reiniciar el juego
    let gameButtonRestart = document.getElementById("restart")
    gameButtonRestart.addEventListener("click", gameRestart)
}
//Funcion para reiniciar el juego
function gameRestart(){
    location.reload()
}
//Generador de numeros aleatorios
function num_random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//Selecion del jugaro a la criatura llamada mokepon
function PlayerChoise() {
    //Reinicio de vidas
    let playerStringLife = document.getElementById("player-life");
    let rivalStringLife = document.getElementById("rival-life");
    playerBattleLife = 3 ;
    playerStringLife.innerHTML = playerBattleLife ;
    rivalBattleLife = 3 ;
    rivalStringLife.innerHTML = rivalBattleLife ;
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
    rivalMokeponChoise()
}
//Desicion de la maquina para elegir que a la criatura mokepon que utliza se ejecuta despues de 
function rivalMokeponChoise() {
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
//Botones de ataque del jugador
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
//Ataque del rival
function rivalAtackChoise() {
    rivalAtackRandomChoise = num_random(1,3) ;
    
    if (rivalAtackRandomChoise == 1){
        rivalAtack = "Fuego 🔥"
    } else if (rivalAtackRandomChoise == 2){
        rivalAtack = "Agua 💧"
    } else if (rivalAtackRandomChoise == 3){
        rivalAtack = "Planta 🌱"
    }
    gameMesaggeStatus()
}
//generador de mensajes de la batalla
function gameMesaggeStatus() {
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
    let gameMessageAtack  = document.getElementById("battle-messages");
    let BattleString = document.createElement("p");
    BattleString.innerHTML = "Tú mascota Ataco con "+ playerAtack +", La mascota del Rival Ataco con "+ rivalAtack +" - "+ gameBattleResults
    gameMessageAtack.appendChild(BattleString);
    //Sistema de vidas en HTML
    let playerStringLife = document.getElementById("player-life");
    let rivalStringLife = document.getElementById("rival-life");
    //Comparador de vidas y mensajes
    if(playerBattleLife == 0 || rivalBattleLife == 0) {
        playerStringLife.innerHTML = playerBattleLife
        rivalStringLife.innerHTML = rivalBattleLife
        gameBattleFinalResults()
    } else {
        playerStringLife.innerHTML = playerBattleLife
        rivalStringLife.innerHTML = rivalBattleLife
    }

}
//Desactivador de botones de ataque
function buttonDisableAtack(){
    let playerButtonFire = document.getElementById("button-fire") ;
    playerButtonFire.disabled = true
    let playerButtonWater = document.getElementById("button-water") ;
    playerButtonWater.disabled = true
    let playerButtonPlant = document.getElementById("button-plant") ;
    playerButtonPlant.disabled = true
}
//Comparador de vidas 
function gameBattleFinalResults() {
    let BattleResults  = document.getElementById("battle-Results");
    let BattleResultsString = document.createElement("p");
    if (playerBattleLife == 0){
        //Perdiste
        buttonDisableAtack()
        BattleResultsString.innerHTML = "😞Haz Perdido la Batalla😞, con " + playerBattleLife + " Puntos vitales vs los Puntos "+ rivalBattleLife +" vitales del enemigo"
        BattleResults.appendChild(BattleResultsString);
    } else if (rivalBattleLife == 0){
        //ganaste
        buttonDisableAtack()
        BattleResultsString.innerHTML = "🎊Haz Ganado la Batalla🎊, con " + playerBattleLife + " Puntos vitales vs los Puntos "+ rivalBattleLife +" vitales del enemigo"
        BattleResults.appendChild(BattleResultsString);
    }
}

//Se espera a que la pagina carge para luego correr el JavaScript
window.addEventListener("load", gameLoading)