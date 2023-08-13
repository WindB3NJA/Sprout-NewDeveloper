import psutil
import time
import tkinter as tk

# Lista de aplicaciones reconocidas o de uso cotidiano en Windows 11
aplicaciones_cotidianas = ["chrome.exe", "firefox.exe", "notepad.exe",
                           "explorer.exe", "winword.exe", "excel.exe", "powerpnt.exe"]

# Diccionario para almacenar el contador de aplicaciones
contadores = {app: 0 for app in aplicaciones_cotidianas}


def get_running_apps():
    global contadores  # Necesitamos acceder a la variable global para actualizar el contador
    apps = {}
    for proc in psutil.process_iter(['pid', 'name']):
        if proc.info['name'] in aplicaciones_cotidianas:
            apps[proc.info['name']] = apps.get(proc.info['name'], 0) + 1
            contadores[proc.info['name']] += 1
    return apps


def print_running_apps(apps):
    # Borra el contenido anterior en el widget de texto
    text.delete(1.0, tk.END)
    text.insert(tk.END, "Aplicaciones abiertas:\n")
    for app, count in apps.items():
        total_count = contadores[app]
        text.insert(
            tk.END, f"{app}: {count} instancia(s) - Total: {total_count} instancia(s)\n")


def update_apps():
    apps = get_running_apps()
    print_running_apps(apps)
    window.after(500, update_apps)  # Actualiza la lista cada 5 segundos


# Crear la ventana de la interfaz de usuario
window = tk.Tk()
window.title("Contador de Aplicaciones")
window.geometry("400x300")

# Crear un widget de texto para mostrar las aplicaciones
text = tk.Text(window, wrap=tk.WORD)
text.pack(fill=tk.BOTH, expand=True)

# Iniciar el proceso de actualización de aplicaciones
update_apps()

# Ejecutar el bucle de la interfaz de usuario
window.mainloop()
