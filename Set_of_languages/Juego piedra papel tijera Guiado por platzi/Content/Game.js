        //Declaramos las variables para utilizar el juego
        //Usuario
        let player = 0;
        let player_win = 0;
        let player_lose = 0;
    //Maquina
        let machine = 0;
        let min = 0;
        let max = 0;
    //resultados
        let count_round = 1;
        let num_rounds = 3;
        let result = "";
    //Declaramos las funciones que se usaran para las rondas y para no repetir el juego
        function random(min,max){
            return Math.floor(Math.random()*(max-min+1)+min)
        }
        function choise(game){
            if(game == 1){
                result = "🪨"; 
            }else if(game == 2){
                result = "📄";
            }else if(game == 3){
                result = "✂️";
            } 
            else{
                result ="No selecciono nada, No se puede jugar ❌"
            }
            return result
        }
        //Bienvenida del jugardor y eleccion del mismo
        alert("Bienvenido a 🪨, 📄 y ✂️ ;)");
        num_rounds = prompt("Cuantas rondas desea hacer?")
        while(num_rounds > 0){
            num_rounds = num_rounds-1
            alert("Ronda " + count_round + " 😲");
            player = prompt("Elija 1 de las 3 opciones: 1)🪨 2)📄 3)✂️");
            machine = random(1,3);
            //Eleccion del jugador y la maquina
            alert("Haz elegido: " + choise(player)) 
            alert("La maquina a elegido: " + choise(machine))
            //Progreso de la partida
            alert("Haz elegido: " + choise(player) + " y la Maquina: " + choise(machine))
            //Sistema de comparaciones 
            if(player == machine){
                alert("Haz empatado con la maquina 😆")
            }else if((player == 1 && machine == 3) || (player == 2 && machine == 1) || (player == 3 && machine == 2)){
                alert("Ganaste wachin 😲")
                player_win = player_win+1
            } 
            else{
                alert("Perdiste wachin 😞")
                player_lose = player_lose + 1
            }
            
            count_round = count_round+1
            alert("Ganaste:" + player_win + " Perdiste:" + player_lose)
        }
        if(player_win>player_lose){
            alert("Ganador supremo 🌟")
        }else if(player_win == player_lose){
            alert("Empate 😂")
        }
        else{
            alert("Perdiste 😞")
        }
        