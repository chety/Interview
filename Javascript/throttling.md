> Explain `throttling` mechanism in js. What is the main difference between `throttling vs. debouncing` ?

_For **debouncing** see_ https://github.com/chety/Interview/blob/master/Javascript/debouncing.md

- `Throttling` use case is same as with the `debouncing`. 
- Instead of grouping multiple calls into single one like we do in `debouncing`, ***we make sure our function is not executed
more than once in every delay miliseconds.***
- Main difference from `debouncing` is that `throttling` guarentees the execuiton of the function every delay miscroseconds.
***
```javascript
function throttling(func,delay){
    let flag = true;
    return function(...args){        
        const context = this;
        if(flag){
            func.apply(context,args);
            flag = false;
        }
        setTimeout(function timerFunc(){
            flag = true;
        },delay);
    }
}

function giveInfo(){
    console.log("Javascript is awsome. I remember it every 2 seconds");
}

const throttle = throttling(giveInfo,2000);

throttle();//Javascript is awsome. I remember it every 2 seconds
throttle(); //if we immediately call the function, it will not BE EXECUTED
//after 2 seconds if i call it again, it will execute
throttle();//Javascript is awsome. I remember it every 2 seconds
```
