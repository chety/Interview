> Promise notion comes with `ES6`. It provides handy mechanisms to deal with `asynchronous` code.

- Promises are `immutable`. That means when a promise is `fullfilled` or `rejected`, it's value can not changed afterwards.
- Instead of passing our functions as `callbacks` to other functions, we have **promise aware** functions that return promise. Then we can take actions
(aka execute our functions)


### Promise.race
- `Promise.race(...)` takes an array and returns first `fullfilled(resolved or rejected)` promise. In some scenerios this method can be used as a `timeout` mechanism.

```javascript
const timeout = function(delay,isReject = false){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            return isReject ? reject("Rejected value") : resolve("Resolved Value");
        },delay)
    })
}

const count = (delay) => {
    return new Promise((resolve) => {
          setTimeout(() => {
            for(var i = 0 ; i< 10 ** 10; i++){}
            console.log("Count ended");
            return resolve("Count resolved");
    }, delay)
    })     
}

Promise.race([count(100),timeout(0,true)])
.then(val => console.log(val))
.catch(err => console.log(err))
//Promise {<pending>} 
//Rejected value
//Count ended 
!!!Attention. If our promise even rejected, our count function continues to work.
```
