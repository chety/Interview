> Explain `object` in Javascript

```javascript
var message = "secret lol";
typeof message // string
message instanceof Object //false
Object.prototype.toString.call(message) //"[object String]"

var messageObj = new String("secret lol object")
typeof messageObj //"object"
messageObj instanceof Object //true
Object.prototype.toString.call(message) //"[object String]"

/*To use method/property on primitive value(here message is just a string literal)
the language automatically coerces a "string" primitive to a String object when necessary*/
message.length // 10
message.toLocaleUpperCase() // "SECRET LOL"
```

In objects, property names are always `strings`. If you use any other value besides a string (primitive) as the property, it will first be _converted to a string_. This even includes numbers, which are commonly used as array indexes, so be careful not to confuse the use of numbers between objects and arrays.
```javascript
const obj = {
    name: "chety",
    true: "will be converted to 'true' string"
}
obj["true"]; //"will be converted to 'true' string"
//here obj itself is key. This object is converted to string via toString(). Because key must be string
obj[obj] = "this obj key will be converted to string via toString()"
obj["[object Object]"]; // "this obj key will be converted to string via toString()"
``` 
***
### Property Descriptor
It is advised to create object via object literal instead of _constructor_
```javascript
//creating object via object literal.Much more concise
const person = {
    name: "okocha" //default set all the properties to true
}
Object.getOwnPropertyDescriptor(obj,"name") //{value: "okocha", writable: true, enumerable: true, configurable: true}

Object.defineProperty(person,"surname",{
    value: "Deşke kere",
    writable: false, //if set to false, you can not change this property value
    configurable: true, //if set to false, you can not configure its descriptor again and you can not delete this prop
    enumerable: true //if set to false,  "will not be included if the object's properties are iterated through"
})
```

### Prevent Extension
To prevent adding new properties to our js object we can use `Object.preventExtensions()` method. But even with this method, we can still delete our existing properties
```javascript
const person = {
    name: "okocha"
}

Object.preventExtensions(person)
delete person.name; //true
person;//{}
person.surname = "kero lo";
person//{}
```
### Seal
`Object.seal(..)` creates a "sealed" object, which means it takes an existing object and essentially calls  `Object.preventExtensions(..)` on it, but also marks all its existing properties as `configurable:false`.

_So, not only can you not add any more properties, but you also cannot reconfigure or delete any existing properties_ (**though you can still modify their values**).

### Freeze
`Object.freeze(..)` creates a frozen object, which means it takes an existing object and essentially calls `Object.seal(..)` on it, but it also marks all _"data accessor"_ properties as `writable:false`, so that their values cannot be changed

### Getters & Setters
```javascript
const person = {
    name: "okocha",    
    get year(){
        return this._year || 0;
    },
    set year(val){
        this._year = val;
    }
}

Object.defineProperty(person,"age",{
    //we are creating a read-only property, just get property
    get(){
        return new Date().getFullYear() - this.year
    },
    enumerable: true
    //we can not define writable and value properties here anymore because we defined get or set or both
})
person.year = 1980;
person;//{name: "okocha", _year: 1980}
person.age; //40
```
