import { Person } from './person';

let persona1 = new Person ( 'Michael', 30, 'Calle de San Isidro' );

console.log( persona1 );

persona1.printName();

console.log( persona1.yearOfBirth(2022) );

persona1.setAddress( 'Calle Atocha 24' );

console.log( persona1.getAddress() );
