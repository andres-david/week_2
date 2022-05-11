import { Vector } from "./vector";

let mainMatriz: Vector = new Vector( 10, 50 );


let aleatorio = ( n: number, k: number): number[] => {

    let result: number[] = [];

    for( let i = 0; i < n; i++ ){

        let num = Math.round( Math.random() * (k - 0) + 0);

        result.push( num );

    }

    return result;

}

let secMatriz: number[] = aleatorio(10, 50);



mainMatriz.print();

console.log( mainMatriz.add( secMatriz ) );

console.log( mainMatriz.subs ( secMatriz ) );

console.log( mainMatriz.mult( secMatriz ) );

console.log( mainMatriz.multNumber( 25 ) );