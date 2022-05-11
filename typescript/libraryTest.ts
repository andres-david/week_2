import { Library } from "./library";
import { Book } from './book';


let libro1 = new Book( 'La Bruja', 130, '405839057621', 'German Castro Caicedo', 'Luna de Locos' );

let libro2 = new Book( 'La Metamorfosis', 80, '8564040590434', 'Frank Kafka', 'Torre Eifel' );

let libros = [libro1, libro2];

let libreria = new Library ( libros, 'Calle sol 98', 'Andrés López' );

console.log(libreria.getAddress());

console.log(libreria.getManager());


console.log(libreria.findByAuthor('German Castro Caicedo'));