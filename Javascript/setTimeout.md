## What will be result of the below code snippets and _explain it_?
```javascript
for(var i = 0 ; i < 5 ; i++){
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}


for(let i = 0 ; i < 5 ; i++){
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```
