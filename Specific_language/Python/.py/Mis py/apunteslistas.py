from audioop import reverse


list_all = [1, 0.1, "diez", True]
print(list_all)
# tambien se puede escribir como
# lista_numero = list(1,2,3,4,5,6,7)
# pero solo va a mostrar 1 de todas las cosas que hay en la lista
# pero eso se soluciona poniendole otro ()
lista_numeros = list((1, 2, 3, 4, 5, 3, 4))

print(lista_numeros)
# recuerda que en python se empieza del 0
rango = list(range(1, 10))
print(rango)
# recuerda que [] es el donde tiene que poner y sacar
print(rango[8])
# esto es para ver dentro de una lista
print(9 in rango)
# pero si quieres cambiar algo dentro de la lista
list_all[1] = 1083
print(print)
# para agregar una cosa a la lista
print.append("tu mama")
print(print)
# si quieres agregar {} dentro de() a los elementos y cambiar el .append por .extend
print.extend(["tu mama", 9, 23, "eleprint"])
print(print)
# si quieres agregar una cosa en un lugar determinado lo pudes hacer con .insert
print.insert(0, "el primero")
print(print)
# esto elimina una parte repentiendola varias veces
print.pop()
print(print)
# o
print.pop(8)
print(print)
# si queremos eliminar cierta parte ponemos .remove sirve para palabras
print.remove("diez")
print(print)
# como saber que numero esta el elemento que buscas
print(print.index(9))
# si queremos saber cuantos elementos se repiten dentro de la lista
print(print.count(9))
# si nos enojamos y queremos eliminar todo ponemos
print.clear()
print(print)
