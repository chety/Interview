> What are the `Natives` in javascript ?

- Natives are `Boolean`, `Number`,`String` 
- They are wrapper object of the corresponding literal values(Boolean for bool,Number for number,String for string)
- **In javascript _variables_ do not have types, _values_ have types**
- When we try to call a method on literal values, These literal values are converted to their native objects internally
(aka **boxing**)
- In this snippet we can use `toLocaleUpperCase` method on string literal. _Literals are primitive_ and there are no methods attached
to them. Javascript automatically convert literals to their Native objects.Thus we can use methods/props that are defined on them
```javascript
const name = "chety";
console.log(name.toLocaleUpperCase()); //"CHETY"
```
### Number(...)
- When we try to convert values to number there are 2 main rules that take place
    - If provided value is a _primitive_ , then JS try to convert it to number.
    - If provided value is a _reference value_(object,array) then first `valueOf()` of the object will be executed. If the result is
    not primitive , then `toString()` method of the object will be executed. If even this result is not primitive than `TypeError` will
    be thrown.
    
    ```javascript
        const a = {
        val: 21,
        valueOf(){
            return this.val * 2;
        }
       }

        const b = {
                valueOf(){
                  return [1,2,3]
                },
                toString(){
                    return "49";
                }
        }
        Number(a);// 42
        //since valueOf result of b is not primitive([1,2,3]), toString of "b" will be called.
        Number(b);// 49
    ```
