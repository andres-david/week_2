import { Contacts } from './contacts';
import { Person } from "./person";


let person1: Person = new Person( 'Juanito', 23, 'Calle de la Vida 236' );

let person2: Person = new Person( 'Pedro', 26, 'Calle Luna 118' );

let contacts: Contacts = new Contacts();

contacts.people.push( person1 );
contacts.people.push( person2 );

// console.log( contacts );

contacts.printCalendar();

