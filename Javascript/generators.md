> **Generators** are a special kind of function, that can be play/paused at a given time.

- _Generators_ do not execute top-to-bottom immediately, instead they return a **generator**. 
- _Generators_ is a subtype of _iterators_
- Then if we call `next()` function of the `returned generator`, our function starts to work until it sees a `yield` statement.

  - ```javascript
    function* foo(x){
       //here yield simply means which value should i insert here? Pause function execution, returns its caller.
       const y = x * (yield); 
       return y;
    }
    
    const fooGenerator = foo(6); //Our function does not work here
    //... some other processes
    
    fooGenerator.next(); //call our function
    // -> {value: undefined, done: false}.value is undefined because in our foo function yield does not return any value.
    fooGenerator.next(7); // pass 7 for yield statement.
    {value: 42, done: true}
    ```
 
***
### 3 Ways to generate numbers
```javascript
const gimmeSomething = (function(){
    var generatedValue;
    return function(){
        generatedValue = generatedValue ? (3 * generatedValue + 1) : 1;
        return generatedValue;
    }
})()

gimmeSomething(); // -> 1
gimmeSomething(); // -> 4 ...
```

```javascript
const gimmeSomething2 = function*(){
    let generatedValue;
    while(true){
        generatedValue = generatedValue ? generatedValue * 3 + 1 : 1;
        yield generatedValue;
    }
}

const itr = gimmeSomething2();
itr.next(); //{value: 1, done: false}
itr.next(); //{value: 4, done: false}
```
```javascript
const numCreator= {
[Symbol.iterator](){
    let generatedValue;
    return {
        next(){
            generatedValue = generatedValue ? generatedValue * 3 + 1 : 1;
            return {done: false, value: generatedValue}
        }
    }    
}
}

for(const value of numCreator){
    console.log(value);
    if(value > 500){
        break;
    }
}
```
