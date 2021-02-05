> `Singleton` is only _design pattern_ that is known by **most of developers:)**

```js
class Person {
    constructor(name,age){
        if(typeof Person.instance === "object"){
            return Person.instance;
        }
        this.name = name;
        this.age = age;        
        Person.instance = this;
        return this;
    }
}

var person1 = new Person("Chety",33);
var person2 = new Person();
console.log(person1 === person2); //true
```
