> What is the **hoisting**?

- Variable and function ***declarations*** are "moved" from where they appear in the flow of the code to the top of the code. This gives rise to the name _"Hoisting"_
- _Only the declarations themselves are hoisted, while any **assignments or other executable logic** are left in place_

***
```javascript
//Thanks to the hoisting mechanism. We can call/execute/invoke a function before it's decleration
foo();

function foo() {
	console.log( a ); // undefined

	var a = 2;
}
```
It's also important to note that hoisting is **per-scope**.
`var a` is hoisted to the top of `foo(..)` (not, obviously, to the top of the program). So the program can perhaps be more accurately interpreted like this:

```javascript
function foo() {
	var a;

	console.log( a ); // undefined

	a = 2;
}

foo();
```
Function declarations are hoisted, as we just saw. But function expressions are not.
```javascript
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
	// ...
};
```
Why in above code we get **TypeError** with foo and **ReferenceError** with bar ?. 
- Foo variable decleration will be hoisted to the top(not the initilazition value),
- Even bar is the name of the function, it is not accessible from anywhere in the code.

**Function decleration is hoisted _before_ variable decleration**
```javascript
foo(); //three

var foo = 23;

function foo(){
    console.log("one")
}

var foo = function(){
    console.log("two")
}

function foo(){
    console.log("three")
}
```
***
## Review (TL;DR)
We can be tempted to look at `var a = 2;` as one statement, but the JavaScript Engine does not see it that way. It sees `var a` and `a = 2` as two separate statements, the first one a compiler-phase task, and the second one an execution-phase task.

What this leads to is that all declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can visualize this as declarations (variables and functions) being "moved" to the top of their respective scopes, which we call "hoisting".

_Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted._

Be careful about duplicate declarations, especially mixed between normal var declarations and function declarations **peril** awaits if you do!
