> Explain iterator mechanism in javascript?

- When you enumurate over a collection/list/array or `object`(_if you define it's iterator_) with `for..of`, you actually call corresponding item iterator
- Iterator object is a regular javascript object which has a `next()` function that returns `{value:...,done:boolean}`
- When you traverse over an array with `for..of`, under the hood javascript calls array builtin `[Symbol.iterator]()` function which basically returns a `iterator` object. 
***
```javascript
const numbers = [1,2,3];
//arrays have built-in iterator 
const numberIter = numbers[Symbol.iterator]();

//when done is true, automatically loop ends, otherwise returns value of the iterator object
numberIter.next();//{value: 1, done: false}
numberIter.next();//{value: 2, done: false}
numberIter.next();//{value: 3, done: false}
numberIter.next();//{value: undefined, done: true}

```
We can also create iterator over our custom objects
```javascript
const person = {
    name: "ronaldinho",
    country: "brazil",
    [Symbol.iterator](){
           let i = 0;
           const keys = Object.keys(person);  
           return {                 
                next(){
                    return {value: person[keys[i++]], done: i > keys.length}
                }
        }
    }
}

const iter = person[Symbol.iterator]();
iter.next();//{value: "ronaldinho", done: false}
iter.next();//{value: "brazil", done: false}
iter.next();//{value: undefined, done: true}
```
***
```javascript
const infinitiveNumberGenerator = {
  [Symbol.iterator](){
        return {
            next(){
                 return {value: Math.random()}
            }
        }
        
   }
}

function getNumbers(){
    const numbers = [];
    for(const num of infinitiveNumberGenerator){
        numbers.push(num);
        if(numbers.length === 20){
            break;
        }
    }
    return numbers;
}

```
