> What is `JSON` stands for? And why and where it is used?

- **JSON** stands for _Javascript Object Notation_
- It is used for _data serialization_ between services/systems. These systems do not have to be in same languages/technologies
- Before _JSON_ , _XML_ was used mostly(it is still in use today). XML occupies much more space because of its trivia tags 
- _JSON_ is much more **lightweight and easy to use**. A lot of major programming languages have _internal support_ for JSON
- JSON has 2  major methods that we use in javascript. `JSON.parse()  and JSON.stringfy()`
- When we serialize object with `JSON.stringfy`, objects that can not be serialized will be undefined.

```javascript
//below 3 lines will be undefined. Because they are not be serialized and has no meaning for other languages
JSON.stringify(function(){});
JSON.stringify(undefined);
JSON.stringify(Symbol());

//If above values are in an array, they will automatically serialized as null to preserve array index location
JSON.stringify([1,2,undefined,3,function(){},new RegExp()]); //"[1,2,null,3,null,{}]"

//If above values are in an object, they will be omitted
const a = {
    val: 42,
    age: undefined,    
    say(){
        console.log("My meaning is ",this.val);
    }
}
JSON.stringify(a);//"{"val":42}"
```

- `JSON.stringfy` method also has a second parameter which can be an array(_keys that we want to be serialized_) or a function
that takes key and value as parameters.
```javascript
const a = {
    val: 42,
    b: false,
    c: {},
    age: undefined,    
    say(){
        console.log("My meaning is ",this.val);
    }
}
//just take "val" and "c" props
JSON.stringify(a,["val","c"]); //"{"val":42,"c":{}}"

//second parameter also can be a function
JSON.stringify(a,function(k,v){
    if(k !== "age" || k !== "say"){
        return v;
    }
}); //"{"val":42,"b":false,"c":{}}"
```
- Third parameter of the `JSON.stringify` is a space indicator. You can specify space amount for indentation
```javascript
//indent 4 spaces 
JSON.stringify(a,null,4);

"{
    "val": 42,
    "b": false,
    "c": {}
}"

JSON.stringify(a,null,"----");
"{
----"val": 42,
----"b": false,
----"c": {}
}"

```
- When we try to stringfy an object, the corresponding object's `toJSON` method is called
```javascript
const b = {
    val: 42,
    toJSON(){
        return {meaningOfTheLife: this.val}
    }
}
JSON.stringify(b); // "{"meaningOfTheLife":42}"
```
- `JSON.parse()` takes string and returns corresponding object
```javascript
JSON.parse(`{
    "val": 42,
    "b": false,
    "c": {}
}`); // {val: 42, b: false, c: {…}}
```

