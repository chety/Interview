> Explain `strict equal(===)` vs. `loose equal(==)`

- **Strict equal** _does not_ provide `type coercion` while comparing values.
- **Loose Equal**  _does_ `type coercion` while comparing values

```javascript
/*
If you compare string and number values, 
1- string value will be coerced to number value thus "42" becomes 42.
2- 42 == 42 is true
*/
"42" == 42; //true

/*
If you compare boolean value with any value, 
1- Boolean value first will be converted to number. true will be converted to 1.(true -> 1, false -> 0)
2- 1 == 1 will return true
*/
1 == true; //true

/*
  When compare any String,Number with an object, object ToPrimitive abstract operation is executed. That is:
  1- Execute object valueOf() method. If result is a primitive value then compare with other operand. Otherwise continue
  2- Execute object toString() method. If result of the method is primitive then make comparasion with other operand 
  otherwise return false
*/
const person = {
    firstName: "Penaber",
    lastName: "Koçber",
    valueOf(){
        return 49;
    }
}
person == 49; //true

const mirov = {
    firstName: "Şivan",
    lastName: "Gavan",
    valueOf(){
        return {};
    },
    toString(){
        return 49;
    }
}
mirov == 49 ; //true
```

### Some Examples of loose equal(==) and explanations
- When comparing with `NaN` , result is always `false`. Even `NaN`  is not equal with itself
```javascript
NaN == NaN ; //false
0 == NaN; //false
```
- Comparing with `null` or `undefined` all the processes results `false`. Only `undefined and null` equals _each other._
```javascript
"0" == null;			// false
0 == undefined;		// false
null == undefined //true
```
- If one side is `boolean` value, it will always converted to `number`. **false** -> 0, **true** -> 1
```javascript
/*
  First false will be converted to number 0. Our comparasion is: "0" == 0. Since types are different, loose equal will perform
  type coercion. If string and number is compared, string value will be converted to number. "0" will be converted to number 0.
  Now our comparasion is 0 == 0. That is true of course
*/
"0" == false; // true
"1" == true; //true
```
- When comparing `literal values` with objects(array,function ...etc), object `ToPrimitive` abstract operation will be called.
    - `valueOf()` method of object will be called. If the result is `primitive`, then compare literal value with this result.
    Otherwise continue with second option
    - `toString()` method of object will be called. Same operation  with `valueOf()` will be held.
    - If none of operation above applied, return false
    
```javascript
/*
  Since [1] is an object, first ToPrimitive operation will be called. [1].valueOf() results [1]. So it is not primitive, then
  engine will call [1].toString() which is "1". So our comparasion is 1 == "1"; Types are different. Coercion will take place,
  "1" will be converted to 1. So 1 == 1 ? it is true obviously
*/
1 == [1]; //true
```
