import random as rd
numerorandom = rd.randrange(0, 3)


def bot():
    botplay = numerorandom
    if botplay == 0:
        return "Rock"
    if botplay == 1:
        return "paper"
    if botplay == 2:
        return "scissors"


def match(play):
    bot_ = bot()

    print("The Bot play " + bot_)
