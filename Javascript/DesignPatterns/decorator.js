class Pasta {
    constructor() {
        this.price = 0;
    }
    getPrice(){
        return this.price;
    }

}

class Penne extends Pasta {
    constructor(){
        super();
        this.price = 8;
    }
}

class PastaDecorator extends Pasta {
    constructor(pasta){
        super();
        this.pasta = pasta;
    }
    getPrice(){
        return super.getPrice() + this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {
    constructor(pasta){
        super(pasta);        
    }
    getPrice(){
        return super.getPrice() + 5;
    }
}
class MozarellaDecorator extends PastaDecorator {
    constructor(pasta){
        super(pasta);        
    }
    getPrice(){
        return super.getPrice() + 12;
    }
}

const penne = new Penne();
const penneWithSauce = new SauceDecorator(penne);
const penneWithSauceAndMozarella = new MozarellaDecorator(penneWithSauce);

console.log(`Penne Price: ${penne.getPrice()}`)
console.log(`Penne With Sauce Price: ${penneWithSauce.getPrice()}`)
console.log(`Penne With Sauce And Mozaeralla Cheese Price: ${penneWithSauceAndMozarella.getPrice()}`)