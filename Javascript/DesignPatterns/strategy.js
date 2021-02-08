//Strategy desing patterns is a great way to support Open/Closed principle in SOLID principles.
//Everytime a new strategy is added, we just add our strategy function nothing more or less.
//If we do not implement this pattern, every time a new strategy is added, we have to add an if/else clause
//to our ShoppingCart class. This also violates Single Responsibility

class ShoppingCart {
    constructor(discountStrategy){
        this.discountStrategy = discountStrategy;
        this.amount = 0;
    }
    setAmount(amount){
        this.amount = amount;
    }
    checkout(){
        return this.discountStrategy(this.amount)
    }
}

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.90;
}

function premiumStrategy(amount) {
    return amount * 0.80;
}


const guestCart = new ShoppingCart(guestStrategy);
guestCart.setAmount(100);
console.log(guestCart.checkout());


const regularCart = new ShoppingCart(regularStrategy);
regularCart.setAmount(100);
console.log(regularCart.checkout());


const premiumCart = new ShoppingCart(premiumStrategy);
premiumCart.setAmount(100);
console.log(premiumCart.checkout());