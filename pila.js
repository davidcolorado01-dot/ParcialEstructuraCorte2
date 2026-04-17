class Pila {
    constructor() {
        this.items = [];
    }
    
    agregar(elemento) {
        this.items.push(elemento);
        console.log("Se agregó:", elemento);
    }
    
    eliminar() {
        if (this.items.length === 0) {
            console.log("La pila está vacía");
            return;
        }
        let eliminado = this.items.pop();
        console.log("Se eliminó:", eliminado);
    }
    mostrar() {
        console.log("Pila actual:", this.items);
    }
}

let pila = new Pila();

pila.agregar({ nombre: "Juliana", edad: 28 });
pila.agregar({ nombre: "Andres", edad: 18 });
pila.mostrar();
pila.eliminar();
pila.eliminar();
pila.mostrar();