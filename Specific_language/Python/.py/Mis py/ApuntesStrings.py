# dir nos sirve para ver que puedes hacer con un string
dir()
# recuerda que sin print no se mostrara en la consola lo que estas pidiendo

# gracias a dir() nos da que podemos hacer con la variable por ejemplo

mystr = "mi string"  # defines la variable que quieres utilizar
# cosas que puedes hacer con los str para aplicarless a las varibles
print(mystr.upper())
print(mystr.lower())
print(mystr.title())
print(mystr.swapcase())
print(mystr.capitalize())
print(mystr.replace("mi ", "string"))
print(mystr.count("g"))
print(mystr.startswith("vuestro"))
print(mystr.endswith("string"))
print(mystr.find("u"))
print(mystr.split())
print(len(mystr))
print(mystr[3])
print(mystr[-3])

print("print " + mystr)
# el + concadena lo que esta despues de el
# otra forma de hacer esto es
print(f"print {mystr}")
# y si solo quiere  una parte de esto como una sola vocal o cierta parte puedes hacer esto
print("el print {0}".format(mystr))
