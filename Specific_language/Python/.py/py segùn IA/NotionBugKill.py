import psutil
i = 5
while (i > 0):
    for proc in psutil.process_iter():
        if proc.name() == "Notion.exe":
            proc.kill()
            print("Se elimino el programa")
            i -= 1
