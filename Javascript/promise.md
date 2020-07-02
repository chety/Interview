> Promise notion comes with `ES6`. It provides handy mechanisms to deal with `asynchronous` code.

- Promises are `immutable`. That means when a promise is `fullfilled` or `rejected`, it's value can not changed afterwards.
- Instead of passing our functions as `callbacks` to other functions, we have **promise aware** functions that return promise. Then we can take actions
(aka execute our functions)

### Promise.all
- `Promise.all(...)` takes an array of promises, executes them in _parallel_ and returns their `resolved` values in corresponding order.
- If any promise is `rejected` then it will be rejected immediately with one `single error value`

```javascript
console.time("Promise.all");
Promise.all([timeout(3000,false), timeout(5000,false)])
.then(([val1,val2]) => console.log(`Val1: ${val1}, Val2: ${val2}`))
.catch(err => console.log(`Geronimo we got the error* ${err}`))
.finally(_ => console.timeEnd("Promise.all"))

 //Promise {<pending>}
// Val1: Resolved Value, Val2: Resolved Value
// Promise.all: 5001.0888671875ms  -> Whole operation takes 5 seconds not 8 seconds.
```
If we change our first parameter in `Promise.all` as `timeout(3000,true)` then we will be rejected in first promise.

```javascript
Promise {<pending>}
// Geronimo we got the error* Rejected value
//Promise.all: 3001.007080078125ms -> See after 3 seconds our promise.all finished. 
```

### Promise.race
- `Promise.race(...)` takes an array and returns first `fullfilled(resolved or rejected)` promise. In some scenerios this method can be used as a `timeout` mechanism.

**Bug alert**: If you pass an empty array like `promise.race([])`, it will hangs.

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

### Promise Polyfill
 > `Promise.first([...])` takes an array of promises and returns `first resolved` promise. If all the promises are rejected, it rejects with all the promises errors
 joined with `#`
 
 ```javascript
 if(!Promise.first){
 Promise.first = function(promises){        
         const errors = [];
         return new Promise((resolve,reject) => {               
                for(const promise of promises){
                    //convert to genuine promise.
                    //You might pass thenable object or immediate value to pass
                    Promise.resolve(promise) 
                    .then(val => {                        
                        return resolve(val);
                    })
                    .catch(err => {
                        errors.push(err);
                    })
                    .finally(_ => {
                        if(errors.length === promises.length){
                          return reject(errors.join("#"));
                        }
                    })
                }                               

})
}
 }
 
 
 const timeout = function(delay,message,isReject = false){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            return isReject ? reject(message) : resolve(message);
        },delay)
    })
}

console.time("first");
Promise.first([timeout(2000,"first promise",true), timeout(4000,"second promise",true), timeout(8000,"third promise",false)])
.then(val => console.log(`Then clause. Val* ${val}`))
.catch(err => console.log(`catch clause. Err* ${err}`))
.finally(_ => console.timeEnd("first"))

 //Promise {<pending>}
// Then clause. Val* third promise -> Because only resolved promise is third promise
// first: 8001.497802734375ms

console.time("first");
Promise.first([timeout(2000,"first promise",true), timeout(4000,"second promise",true), timeout(8000,"third promise",true)])
.then(val => console.log(`Then clause. Val* ${val}`))
.catch(err => console.log(`catch clause. Err* ${err}`))
.finally(_ => console.timeEnd("first"))
 
//Promise {<pending>}
// catch clause. Err* first promise#second promise#third promise  -> All promises are rejected, return their errors
// first: 8001.68798828125ms

 ```

