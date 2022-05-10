let {Contacts} = require("./contacts");
let { Person } = require('./person');
 
let contact1 = new Contacts();

let person1 = new Person(1.70, 60, 1992, true, 'nadar', 'leer');

contact1.contacts.push( person1 )

contact1.printPersons();