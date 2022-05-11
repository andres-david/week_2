import { Book } from './book';

export class Library {
    
    private books  : Book[];
    private address: string;
    private manager: string;
    
    constructor( books: Book[], address: string, manager: string ){
        this.books   = books;
        this.address = address;
        this.manager = manager;
    }

    getAddress(): string{
        return this.address;
    }

    getManager(): string{
        return this.manager;
    }

    setAddress( address: string ){
        this.address = address;
    }

    setManager( manager: string ){
        this.manager = manager;
    }

    toString(): void{
        
        for( let i = 0; i < this.books.length; i++ ){

            console.log(this.books[i].toString());

        }

    }

    getNumberOfBooks(): number{
        return this.books.length;
    }

    findByAuthor( author: string ): Book[]{

        let books: Book[] = [];

        for( let i = 0; i < this.books.length; i++ ){

            if( this.books[i]['author'] === author ){

                books.push( this.books[i] );

            }

        }

        return books;

    }
    
}