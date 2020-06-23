- **Paralellism** is actually doing multiple things _simultaneously_. It is a process of mixture _hardware and software_. Your system has to have _multiple cores__ 
to do paralel executing.
- **Concurrency** is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. For example, _multitasking on a single-core machine_
- In javascript when we execute our code via `setTimeout`, our code will be moved to the `WebAPI`. After its time is come,
it will be moved to the ***Event Queue***. Aka `macrotask queue`.
- In `Event queue`, **Event Loop** always checks if `execution stack` is empty. If it is empty, it will grap `first value` from queue to the stack. Because `Queue` 
is _FIFO_. Aka **First In First Out**
- If your promise is resolved, it's value will be in ***Microstask Queue***. It has _higher_ precedence from _event queue_. 
- Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.(https://blog.golang.org/waza-talk)


```javascript
(function(){
    console.log("A");
    setTimeout(function(){
        console.log("B");
    },0)

   Promise.resolve("resolve1").then(_ => console.log("C"));

   setTimeout(function writToConsole(){
        return Promise.resolve("resolve2").then(_ => console.log("D"));
    },0)
    console.log("End");
})()
 // -> A End C B  D
```
