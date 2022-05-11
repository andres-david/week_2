export class Vector {

    private elements: number[] = [];

    constructor( n: number, k: number){

        let num: number = 0;

        for( let i = 0; i < n; i++ ){

            num = Math.round( Math.random() * (k - 0) + 0);

            this.elements.push( num );

        }

    }

    print(): void{
        console.log( this.elements );
    }

    add( v1: number[] ): number[]{

        let arrSuma: number[] = [];

        for( let i = 0; i < this.elements.length; i++ ){

            let suma = this.elements[i] + v1[i];
 
            arrSuma.push( suma );

        }

        return arrSuma;

    }

    subs( v1: number[] ): number[]{

        let arrResta: number[] = [];

        for( let i = 0; i < this.elements.length; i++ ){

            let resta = this.elements[i] - v1[i];
 
            arrResta.push( resta );

        }

        return arrResta;

    }

    mult( v1: number[] ): number[]{

        let arrMult: number[] = [];

        for( let i = 0; i < this.elements.length; i++ ){

            let resta = this.elements[i] * v1[i];
 
            arrMult.push( resta );

        }

        return arrMult;

    }

    multNumber( n: number ): number[]{

        let arrResult: number[] = [];

        for( let i = 0; i < this.elements.length; i++ ){

            let result = this.elements[i] * n;
 
            arrResult.push( result );

        }

        return arrResult;

    }

    

}