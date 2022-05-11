export class Book {

    private title    : string;
    private nPages   : number;
    private isbn     : string;
    private author   : string;
    private editorial: string;

    constructor( title: string, nPages: number, isbn: string, author: string, editorial: string ){
        this.title     = title;
        this.nPages    = nPages;
        this.isbn      = isbn;
        this.author    = author;
        this.editorial = editorial;
    }

    getTitle(): string{
        // console.log( this.title );
        return this.title
    }

    getNPages(): number{
        // console.log( this.nPages );
        return this.nPages;
    }

    getIsbn(): string{
        // console.log( this.isbn );
        return this.isbn;
    }

    getAuthor(): string{
        // console.log( this.author );
        return this.author;
    }

    getEditorial(): string{
        // console.log( this.editorial );
        return this.editorial;
    }

    setTitle( title: string ): void{
        this.title = title;
    }

    setNPages( nPages: number ): void{
        this.nPages = nPages;
    }

    setIsbn( isbn: string ): void{
        this.isbn = isbn;
    }

    setAuthor( author: string ): void{
        this.author = author;
    }

    setEditorial( editorial: string ){
        this.editorial = editorial;
    }

    toString(): string{
        return `Title - ${this.title} \n Number of Pages - ${this.nPages} \n ISBN - ${this.isbn} \n Author - ${this.author} \n Editorial - ${this.editorial}`;
    }

}