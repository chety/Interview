> Class mechanism in Javascript

- There is no actual `class mechanism` in Javascript like other Object Oriented Languages(Java,C#,Python ...etc)
- `Class` keyword came with ES6. It is just a syntactic sugar of `function`. When transpilers(babel) transpiles
our code, it compiles classes to the corresponding functions.
- ***Favors composition over `class inheritance`***
***
### Inheritance
Another way to mimic inheritance in Js is `mixins`
```javascript
const mixins = (sourceObj,targetObj) => {    
    const target = JSON.parse(JSON.stringify(targetObj));
    for(const key in sourceObj){    
        if(!(key in target)){
            target[key] = sourceObj[key];
        }
    }
   return target;
}

function Vehicle(){
    this.engine = 1;
    this.amount = 123;
    Vehicle.prototype.drive =  function(){
        this.amount -= 20;
        if(this.amount > 10){
            console.log(`Driving main Vehicle class with ${this.engine} engines`);
        }
        
    }

  Vehicle.prototype.fuel = function(amount){
        this.amount += amount;
    }
}
//we are mimicking inheritance via mixins
const Bicycle = mixins(Vehicle,{
    wheels: 2,
    engine: 13,
    ride(){
        console.log("Riding to the stars");
    }
})

Bicycle.drive()
//->Driving main Vehicle class with 13 engines

```
***

```javascript
function Vehicle(){
    this.engine = 1;
    this.amount = 123;
    Vehicle.prototype.drive =  function(){
        this.amount -= 20;
        if(this.amount > 10){
            console.log(`Driving main Vehicle class with ${this.engine} engines`);
        }
        
    }
    
    Vehicle.prototype.fuel = function(amount){
        this.amount += amount;
    }
}

function Car(){
    const car = new Vehicle();
    car.wheels = 4;
    car.engine = 10;
    const vehicleDrive = car.drive;
    car.drive = function(){
        vehicleDrive.call(this);
        console.log("Car drive function called");
    }
    return car;
}

//since we return car object from Car function thus we do not have to use new keyword
const car = Car();
//first call base/super/parent drive function with Car object as this, then add other implementations
car.drive();
//->Driving main Vehicle class with 10 engines
//->Car drive function called
```
