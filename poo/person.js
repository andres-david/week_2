class Person{

    constructor(altura, peso, anionacimiento, vivo, hobbie1, hobbie2 ){
        this.altura = altura;
        this.peso = peso;
        this.vivo = vivo;
        this.anionacimiento = anionacimiento;
        this.hobbies = [hobbie1, hobbie2];
    }

    imc() {
        return this.peso / ( this.altura * this.altura );
    }

    edad() {
        return 2022 - this.anionacimiento
    }

    printAll() {
        console.log(`altura - ${this.altura} \n peso - ${this.peso} 
                    \n vivo - ${this.vivo} \n anionacimiento - ${this.anionacimiento} \n ${this.hobbies}`);
    }

    printHobbies () {
        for ( let i = 0; i < this.hobbies.length; i++ ){
            console.log(this.hobbies[i]);
        }
    }

}


module.exports = {Person};