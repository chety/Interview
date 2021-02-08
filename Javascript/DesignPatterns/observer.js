//observer pattern is used for event emitting,notification the observers ... etc

class Product {
  constructor() {
    this.price = 0;
    this.observers = [];
  }
  changePrice(amount) {
    if (amount === this.price) {
      return;
    }
    this.price = amount;
    this.notifyAll();
  }

  register(...listeners) {
    const constructorNames = this.observers.map(
      (observer) => observer.constructor.name,
    );
    listeners.forEach((listener) => {
      const {
        constructor: { name },
      } = listener;
      if (!constructorNames.includes(name)) {
        constructorNames.push(name);
        this.observers.push(listener);
      }
    });
  }

  unregister(...observers) {
    const constructorNames = observers.map(
      (observer) => observer.constructor.name,
    );
    this.observers = this.observers.filter(
      (instance) => !constructorNames.includes(instance.constructor.name),
    );
  }

  notifyAll() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class Fee {
  update(product) {
    console.log(`Fee class update method. New product price: ${product.price}`);
  }
}

class Tax {
  update(product) {
    console.log(`Tax class update method. New product price: ${product.price}`);
  }
}

const product = new Product();
const fee = new Fee();
const tax = new Tax();
product.register(fee, tax, fee, fee, tax);
product.register(fee, tax);
product.changePrice(12);
console.log('-----------------------');
product.changePrice(12);
console.log('-----------------------');
product.unregister(tax);
product.changePrice(44);
