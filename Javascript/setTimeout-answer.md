```javascript
for(let i = 0; i<5;i++){
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }  
```

> let/const keyword is **block scoped**. It will not be created globally. 

So every time we create setTimeout with console.log, it will take its local i variable copy. So it will write to the console as expected.
0,1,2,3,4

***

```javascript
for(var i = 0; i<5;i++){
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }  
```
> var keyword is **function scoped**. If you do not decleare var inside a function, it will be created globally.

So in our first for var i will be created globally. It's final value is 5 before setTimeout starts to work. When setTimeout start to work
it will write 5 (5 times) to the console

What can be done to console.log 0,1,2,3,4 as expected with var decleration.

**First Solution**
```javascript
for(var i = 0; i< 5; i++){
  setTimeout(console.log,i * 1000,i)
}
```
**Second Solution**
>Thanks to IIFE(Immediately Invoked Function Expressions)

```javascript
for(var i = 0; i<5;i++){
  (function(x){
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    })(i);
}
```
