> `Factory design pattern` is a _creational pattern_ that is used to expose object creation to outside. So you can _hide your actual class
creation process_ from outside. Kind of encapsulation.:nerd_face:

```js
//car.js
class Bmw {
    constructor(model,year,maxSpeed){
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
    }
    getInfo(){
        return `Bmw ${this.model} is designed in ${this.year} with ${this.maxSpeed} max speed`
    }
}

export class BmwFactory{
    create(type){
        switch(type){
            case "X5":
                return new Bmw("X5",2013,310);
            case "X6":
                return new Bmw("X6",2015,350);
            default:
                throw new Error(`Unknown ${type} car type.`)
        }
    }
}
```
***
```js
//index.js
import {BmwFactory} from "./car.js";

const factory = new BmwFactory();
const x5 = factory.create("X5");
const x6 = factory.create("X6");
console.log(x5.getInfo());
console.log(x6.getInfo());
```
