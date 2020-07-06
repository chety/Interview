> **Generators** are a special kind of function, that can be play/paused at a given time.

- Generators do not execute top-to-bottom immediately, instead they return a **generator**. 
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
