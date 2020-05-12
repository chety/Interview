> Class mechanism in Javascript

- There is no actual `class mechanism` in Javascript like other Object Oriented Languages(Java,C#,Python ...etc)
- `Class` keyword came with ES6. It is just a syntactic sugar of `function`. When transpilers(babel) transpiles
our code, it compiles classes to the corresponding functions.
- A class is a blue-print. To actually get an object we can interact with, we must build (aka, "instantiate") something from the class. The end result of such "construction" is an object, typically called an "instance", which we can directly call methods on and access any public data properties from, as necessary.
- This object is a **copy** of all the characteristics described by the class.

- ***Favors composition over `class inheritance`***
***
### Mixins
 > JavaScript's object mechanism does not automatically perform copy behavior when you "inherit" or "instantiate". Plainly, there are no `"classes"` in JavaScript to instantiate, only objects. And objects don't get copied to other objects, they get linked together

Another way to mimic inheritance in Js is `mixins`. Two different technique is provided below

**First Way**
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

const Vehicle = {
    engine : 1,
    amount : 123,
    drive :  function(){
        this.amount -= 20;
        if(this.amount > 10){
            console.log(`Driving main Vehicle class with ${this.engine} engines`);
        }
        
    },

 fuel :function(amount){
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

Bicycle.drive();//->Driving main Vehicle class with 13 engines

/*
Here Bicyle and Vehicle drive,fuel method are just the same reference(No separate function copy). There is
no formal function copy, just the same reference. If you add a prop to a common function object
(Functions are objects remember!) other function will be affected too*/
Bicycle.drive.dummyProp = "Just setting dummy prop from Bicyle object";
Vehicle.drive.dummpProp; //Just setting dummy prop from Bicyle object 
```
***

**Second Way- Parasitic Inheritance**
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
