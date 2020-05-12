> What is the `[[ProtoType]]` mechanism in Javascript ?

- [[ProtoType]] is simply a reference which points from child object to base object.

```javascript
const obj = {a: 23};
//create anotherObj and makes it's [[ProtoType]] to obj. 
const anotherObj = Object.create(obj);
anotherObj.__proto__ === obj; //->true
obj.isPrototypeOf(anotherObj); //->true
Object.getPrototypeOf(anotherObj) === obj; // ->true 

//Even anotherObj does not have 'a' property, [[Get]] internal of the object will look up
//the object's [[ProtoType]] chain It will stop when property is found or 
//prototype chain is ended which is [[Object.ProtoType]]
console.log(anotherObj.a); //->23

const obj1 = {}
const obj2 = Object.create(obj1);
// Simply: does `obj1` appear anywhere in
// `obj2`s [[Prototype]] chain?
obj1.isPrototypeOf(obj2); //true

```
- In browsers there are a special `__proto__`(_dunder proto_) property(**actually a getter/setter**) to access an object `[[ProtoType]]`.
We can mimic this behaviour like below.
```javascript
Object.defineProperty(f,"___proto__",{
    get(){
        return Object.getPrototypeOf(this);
    },
    set(_proto){
        Object.setPrototypeOf(this,_proto);
        return _proto;
    }
})
```
- With ES6 there is no need to use `__proto__` getter/setter. See below code snippets
```javascript
function Foo(){
    this.name = "Fooo";
    Foo.prototype.sayMyName = function(){
        console.log(`Hi there, my name is ${this.name}`);
    }
}

Object.getPrototypeOf(f); //{sayMyName: ƒ, constructor: ƒ}
Object.setPrototypeOf(f,Foo.prototype);
```
<img src="images/prototype.png" alt="prototype mechanism in javascript"/>


***
### Property [[Get]] & [[Put]]
1.If a normal data accessor property named foo is found anywhere higher on the `[[Prototype]] chain,
and it's not marked as `read-only (writable:false)` then a new property called foo is added directly to myObject, 
resulting in a shadowed property.
```javascript
//when define as object literal, writable - configurable - enumerable is true by default
const baseObj = {
    a: "12"
}
var myObject = Object.create(baseObj);
myObject: //{}
myObject.a = "345"; //shadowing prop "a"
myObject; //{a: "345"}
```
2.If a foo is found higher on the `[[Prototype]]` chain, but it's marked as read-only `(writable:false)`, then both the
setting of that existing property as well as the creation of the shadowed property on myObject are disallowed. 
If the code is running in strict mode, an error will be thrown. Otherwise, the setting of the property value will silently be ignored.
Either way, no shadowing occurs.
```javascript
Object.defineProperty(baseObj,"b", {
    value: 49,    
    writable: false, //these 3 props are default as false when used by defineProperty method
    configurable: false,
    enumerable: false
});
baseObj: //{a: "12", b: 49}
myObject.b = 1234; //In strict mode throw error(readonly prop), Non-strict mode ignored
myObect.b; //49
```
3.If a foo is found higher on the `[[Prototype]]` chain and it's a `setter`, then the setter will always be called. 
No foo will be added to (aka, shadowed on) myObject, nor will the foo setter be redefined.
```javascript
Object.defineProperty(baseObj,"c", {
    //when using get and set, you can not provide value and writable props.
    get(){
        return c
    },
    set(val){
        c = val;
    },
    configurable: false,
    enumerable: false
});
baseObj.c = "laps";
baseObj.c; //"laps"
myObject.c; //"laps"

//Here no "c" prop is attached to myObject itself. Because "c" is a setter and in upper
//[[ProtoType]] set will be executed baseObj.c prop will be changed. Danger !!!
myObject.c = "Geronimo"; 
myObject.hasOwnProperty("c");//false
baseObj.c; //"Geronimo"
```

***

### Constructor
- It's most appropriate to say that a "constructor" is **any function called with the `new` keyword in front of it**.
- Functions aren't constructors, but function calls are "constructor calls" if and only if `new` is used.

