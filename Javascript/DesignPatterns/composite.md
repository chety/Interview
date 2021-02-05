

```js
//composite.js

class Equipment {
    getPrice(){
        return this.price || 0;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}

class Composite extends Equipment {
    constructor(){
        super();
        this.equipments = []
    }
    add(equipment) {
        this.equipments.push(equipment);
    }
    getAllPrice(){
        return this.equipments.map(equipment => equipment.getPrice()).reduce((total,price) => total + price, 0)
    }
}

class Cabinet extends Composite {
    constructor(){
        super();
        this.setName("Cabinet");
    }
}

class FloopyDisk extends Equipment {
    constructor(name){
        super();
        this.setName(name);
        this.price = 100
    }
}

class HardDisk extends Equipment {
    constructor(name){
        super();
        this.setName(name);
        this.price = 500;
    }
}

class SSDDisk extends Equipment {
    constructor(name){
        super();
        this.setName(name);
        this.price = 1000
    }
}

export {
  Cabinet,
  FloppyDisk,
  HardDisk,
  SSDDisk
};

```
***
```js
//index.js
import {Cabinet,FloppyDisk,HardDisk,SSDDisk} from "./composite.js";

var floppyDisk = new FloppyDisk("Super floopy disk");
var hardDisk = new HardDisk("Awsome Hard disk");
var ssd = new SSDDisk("Cool SSD disk");

var cabinet = new Cabinet();
cabinet.add(floppyDisk);
cabinet.add(hardDisk);
cabinet.add(ssd);

console.log(cabinet.getPrice());
```
