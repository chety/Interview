> Explain `debouncing` mechanism in JS?

- Debouncing is one of the core concept of js
- _It is used for limiting the rate of execution of a function_. It is used to increase browser performance.
- Some tasks in JS are time-consuming and since JS is a single threaded language thus `debouncing` comes to rescue here.
- **`Usage scenerios`**
    - It can be used for suggestive text where user has to wait for a few miliseconds to see the suggestion
    - Can be used in the content loading fo the web pages when the user scroll
    - Useful in grouping sudden burst of keystroke events into a single one
***
```javascript
function debouncing(func,delay){
    let debounceTimer;
    return function(...args){
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function timeFunc(){
            func.apply(context,args);
        },delay);
    }
}

function whoIsTheGreatest(){
    console.log("Çû seferê, hat eynê kerê berê");
}

const debounce = debouncing(whoIsTheGreatest,2000);

debounce(); // Çû seferê, hat eynê kerê berê
debounce();//Çû seferê, hat eynê kerê berê
```
