class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    addBook(nombre, autor){
        this.libros.push(new Libro(nombre, autor));
    }

    addMascota(nombre, tipo){
        this.mascotas.push(new Mascota(nombre, tipo));
    }

    countMascotas(){
        return this.mascotas.length;
    }

    getBookNames(){
        let nombres = [];
        for(let i = 0; i < this.libros.length; i++){
            nombres.push(this.libros[i].nombre);
        }
        return nombres;
    }
}

class Libro {
    constructor(nombre, autor){
        this.nombre = nombre;
        this.autor = autor;
    }
}

class Mascota {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}


let user1 = new Usuario('Juan', 'Perez');
user1.addBook('El señor de los anillos', 'J.R.R. Tolkien');
user1.addBook('El señor de los anillos 2', 'J.R.R. Tolkien');
user1.addMascota('Firulais', 'Perro');
user1.addMascota('Pelusa', 'Gato');

console.log(user1.countMascotas());
console.log(user1.getBookNames());
console.log(user1.getNombreCompleto());
