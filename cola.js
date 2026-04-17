class Cola {
    constructor() {
        this.items = [];
    }
    agregar(numero) {
        this.items.push(numero);
        console.log("Se agregó:", numero);
    }
    eliminar() {
        if (this.items.length === 0) {
            console.log("La cola está vacía");
            return;
        }
        let eliminado = this.items.shift();
        console.log("Se eliminó:", eliminado);
    }

    mostrar() {
        console.log("Cola actual:", this.items);
    }
}
let cola = new Cola();

cola.agregar(10);
cola.agregar(20);
cola.agregar(30);
cola.mostrar();
cola.eliminar();
cola.mostrar()