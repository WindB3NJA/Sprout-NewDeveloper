"""se importa random para generar un numero aleatorio """
import random as rd
# se declara las varibles de uso
player = 0
player_win = 0
player_lose = 0
machine = 0
round_count = 0
round_number = 1

# funciones que se usaran en la partida


def choise(choise_game):  # [jugada] funcion para arrojar que objeto elijio
    """Definicion de jugadas del 1 al 3 y que objetos son"""
    result = ""
    if choise_game == 1:
        result = "🪨"
    elif choise_game == 2:
        result = "📄"
    elif choise_game == 3:
        result = "✂️"
    else:
        result = "No selecciono nada, No se puede jugar ❌"
    return result


print("Bienvenido a Píedra Papel y Tijeras 😲")
round_count = int(input("Cuantas rondas desea hacer 🤔?"))
while round_count > 0:
    round_count = round_count - 1
    print(f"Usted esta en la ronda:{round_number}")
    player = int(input("""Elija 1 de las 3 opciones:
                        1)🪨  2)📄  3)✂️ : """))
    machine = rd.randrange(1, 4)
    print(f"Usted ha elegido : {choise(player)}")
    print(f"La maquina a elegido: {choise(machine)}")
    print(f"Haz elegido: {choise(player)}  y la Maquina: {choise(machine)}.")
    # Comparacion de la maquina y la partida
    if player == machine:
        print("Haz empatado con la maquina")
    elif player == 1 and machine == 3 or player == 2 and machine == 1 or player == 3 and machine == 2:
        round_game = "Ganaste la ronda wachin 😲"
        player_win = player_win + 1
    else:
        round_game = "Perdiste la ronda wachin 😞"
        player_lose = player_lose + 1

    round_number = round_number + 1
    print(f"Haz Ganado:{player_win} y Haz Perdido:{player_lose}")

if player_win > player_lose:
    print("Ganador supremo 🌟")
elif player_win == player_lose:
    print("Empate 😂")
else:
    print("Perdiste 😞")
