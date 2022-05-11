import { Person } from "./person";

export class Contacts {

    public people: Person[];
    
    constructor( ){
        this.people = [];
    }

    printCalendar(): void{

        for( let i = 0; i < this.people.length; i++ ){

            for( let property in this.people[i] ){

                console.log(this.people[i][property]);

            }

        }

    }

}