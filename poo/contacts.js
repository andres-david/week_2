const { Person } = require('./person');

class Contacts {


    constructor( ){
        this.contacts = [];
    }

    printPersons(){

        for( let i = 0; i < this.contacts.length; i++ ){

            console.log( this.contacts[i] );

        }

    }

}

module.exports = {Contacts}