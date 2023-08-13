import tkinter as tk
from PIL import ImageTk, Image
from graphviz import Digraph


def create_neural_network_graph():
    neural_network_graph = Digraph('NeuralNetwork', format='png')

    neural_network_graph.node('input1', label='Entrada 1')
    neural_network_graph.node('input2', label='Entrada 2')
    neural_network_graph.node('hidden1', label='Neurona oculta 1')
    neural_network_graph.node('hidden2', label='Neurona oculta 2')
    neural_network_graph.node('output', label='Salida')

    neural_network_graph.edges([('input1', 'hidden1'), ('input1', 'hidden2'),
                                ('input2', 'hidden1'), ('input2', 'hidden2'),
                                ('hidden1', 'output'), ('hidden2', 'output')])

    neural_network_graph.render('neural_network_graph', view=False)


def show_neural_network_graph():
    window = tk.Tk()
    window.title("Visualización de Red Neuronal")

    create_neural_network_graph()

    img = ImageTk.PhotoImage(Image.open('neural_network_graph.png'))
    label = tk.Label(window, image=img)
    label.pack()

    window.mainloop()


if __name__ == "__main__":
    show_neural_network_graph()
