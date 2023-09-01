# esto no se interpreta sino que es un mensaje

import random
from setuptools import sic


print("numeros de el mensaje que no encontro")
mensa2 = ("quenumerosds")
mensa = ("losnumerosquebuscassonestos")
losnumeros = mensa.find("busca")
print(losnumeros)

print("comparacion del mensaje si es true y si no false")
print(mensa2 == mensa)

print("saca parte del texto")
mensaje = "comoestonoeostameonmayusculas"
como = mensaje[0:4]
print(como)

print("agregando texto de poco a poco")
mensaje0 = "como"
mensaje0 += " "
mensaje0 += "esto"
mensaje0 += " "
mensaje0 += "esta"
mensaje0 += " "
mensaje0 += "de"
mensaje0 += " "
mensaje0 += "poco"
mensaje0 += " "
mensaje0 += "a"
mensaje0 += " "
mensaje0 += "poco"
mensaje0 += "."
print(mensaje0)

print("agengando mensaje de varias partes")
mensaje1 = "más"
espacio0 = " "
mensaje2 = "escribir"
espacio1 = " "
mensaje3 = "pero"
espacio3 = " "
mensaje4 = "seguro"
print(mensaje1+espacio0+mensaje2+espacio1+mensaje3+espacio3+mensaje4)

print("sumas simples asignando numeros a cosas")
numero7 = 7
numero8 = 8
print(numero7 + numero8)

print("esta es una forma de sumar con letras al mismo tiempo")
respuesta = numero7 + numero8
respuesta = str(respuesta)
print("la sumas de 7 mas 8 = " + respuesta)

# como ver que tipo de informacion
print(type("hello word"))


# que es un boolean o bulenao es para definir tipos de estado
True  # si o prendido
False  # no o apagado

# como hacer una lista(list) esto es para agurupar numero o info pero ser puede cambiar
[30, 120, 210, 40]
["hola", "si", "no", "gracias"]
[numero8, 10.2, "hola", 10]

# que es una tupla(tuples) es una lista que no se puede cambiar es casi lo mismo de arriba
(30, 120, 210, 40)
("hola", "si", "no", "gracias")
(numero8, 10.2, "hola", 10)

# dicionarios es una forma de darle un lenguaje a python
{  # key    #valor
    "name": "benjamin",
    "lastname": "benja",
    "nickname": "ben"
}
# que es none es nada es para decir que no hay nada
None

# variables (las mayusculas con importantes)
numero1 = 1
mi_nombre = "mi nombre"
_dos = 2

# para leguaje de programacion mas complicados se debe usar todas las palabras en mayusculas para definir una variable de no puede cambiar
POU = "medio juego"
print(POU)
# python es un lenguaje dinamico por lo cual
pou = 1
print(pou)
# pero ahora quiero cambiar el valor de pou es
pou = 2
print(pou)
# en conclucion las variables se pueden cambiar entre mas vallas bajando

# Observaciones
# si hay un error en la mitad de la pagina lo que falta no se ejecuta

# rango
for val in range(10):
    print(val+1)
    print("hola")
# le estamos dicendo que en 10 casillas repita lo que tiene abajo usando : para dejarlo encadenado abajo

# importamos random para usar random.choice
opcion = ["si", "no"]
for val in range(10):
    print(random.choice(opcion))
# este codigo hace tomar una opcion random definiendola

# exite algo llamado class que calasifica una nombre o cosa donde dentro de este se pueden definir funciones


class humano:
    saludar = "Hola"
    despedirce = "chao"


print(humano.saludar)
# tambien podemos asignar variables que actuen de esa forma
print = humano
print(print.saludar)
# ademas remplazar aciones mediante el codigo avanze
english_human = humano
english_human.saludar = "hello"
english_human.despedirce = "bye"
# y es asi como podemos reemplazar lo que hace
# class calculator:
#    def .div(a,c):
#        return a/c

# print(int(calculator.div(70,7)))
# tambien podemos hacer operaciones matematicas con esto definiendo funciones
# luego devolverlas
# para que luego imprima lo que buscas en el mismo orden

# --type()
# es una forma de ver que son las varibles

# si tengo una lista tambien podria ver cuantas cosas tengo en ella
lista = [10, 32, 123, 56, 866]
print(max(lista))  # busca el valor maximo de la lista
print(min(lista))  # agarra el minimo de una lista
print(len(lista))  # dice la cantidad de elementos que hay en una lista
