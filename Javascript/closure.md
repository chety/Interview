> What is the ***closure*** mechanism?

When you create a inner function inside another outer function and returns this inner function as result. Later on when execute outer function, resulted  inner function will _still access it's lexical scope_. That mechanism is known as `closure`. 
***
```javascript
function outerGenerator(){
    let number = 0;
    function innerGenerator(){
        return number++;
    }
    return innerGenerator;
}

var gen = outerGenerator()
gen(); // 0
gen(); // 1
gen(); // 2 ... and so on
```

- In above code sample gen variable will point to `innerGenerator` function. Normally this `innerGenerator` is private and not accessible from outside if we do not return it from `outGenerator` function. 
- Here `gen` function pointer will access `its and its outer lexical scope` members(which here is `number` variable)

***

```javascript
function writeNumbers() {
    for(var i = 1 ; i<= 5;i++){
            setTimeout(function timer(){
                console.log(i);
            }, i * 1000);
    }
 }
 writeNumbers()//the output will be  6 6 6 6 6. But instead of 1  2 3 4 5 why we got such a result?
```
In above code `timer` function has a closure over `writeNumbers` function. That means it can access it's scope and `writeNumbers` scope. Since `var` is function scoped, all the 5 timer function will reference to global `i` variable which in this case is `6`(_The first exit condition for the loop_)
To overcome this we can 
- Declare i variable with `let` instead of `var`.
- We can wrap `settimeout`with an `IIFE(Immediately Invoked Function Expressions)` since IIFEs create scope whenever they are declared.
```javascript
function writeNumbers() {
    for(var i = 1 ; i<= 5;i++){
            (function(k){
                setTimeout(function timer(){
                console.log(k);
            }, k * 1000);
            })(i)
            
    }
 }
```
We have to pass `i` variable to our `IIFE`. Because even IIFE can create scope,if we do not pass any i variable , it's scope will be empty, and for the `i` variable they will still reference to global i variable.
***
## Review

***Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.***

Closures can trip us up, for instance with loops, if we're not careful to recognize them and how they work. But they are also an immensely powerful tool, enabling patterns like modules in their various forms.

Modules require two key characteristics: 
1. An outer wrapping function being invoked, to create the enclosing scope.
2. The return value of the wrapping function must include reference to at least one inner function that then has closure over the private inner scope of the wrapper.
