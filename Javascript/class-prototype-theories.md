> Compare Function - Class - OLOO(**Object Linked to Other Objects**) implementation.

- Classic OOP language(More accurately maybe we can call _class oriented languages_)approach with `ES6 class` mechanism

```javascript
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return `Hello, my name is ${this.name}, I am  ${this.age} years old`
    }
}

class  Student extends Person {
    constructor(name,age,school,gpa){
        super(name,age);
        this.school = school;
        this.gpa = gpa;
    }

    getInfo(){
        return `${super.getInfo()}\n I graduated from ${this.school} with ${this.gpa} gpa`
    }
}

var student = new Student("chety clooney",31,"Ege university",3.50);

student.getInfo();
/*"Hello, my name is chety clooney, I am  31 years old
  I graduated from Ege university with 3.5 gpa" */
student instanceof Student;//true
student instanceof Person;//true
```
- Second way we can implement same behavior with functions. In first implementation when javascript engine works, it converts `so-called` classes to the functions. This implementation detail has lots of `buzzwords`  like `prototype`, `call` ..etc. We do not actually
bind these functions together, just _call/borrow function prototype methods._

```javascript
function Person(name,age){
    this.name = name;
    this.age = age;

    Person.prototype.getInfo = function(){
        return `Hello, my name is ${this.name}, I am  ${this.age} years old`
    }
}

function Student(name,age,school,gpa){
    Person.call(this,name,age);
    Student.prototype.getInfo = function(){        
        return `${Person.prototype.getInfo.call(this)}\n I graduated from ${this.school} with ${this.gpa} gpa`
    }
}

var student = new Student("ali sfafa",55,"Princeton university",3.50);
student; //Student {name: "ali sfafa", age: 55}
student.getInfo();
/*"Hello, my name is ali sfafa, I am  55 years old
 I graduated from undefined with undefined gpa"*/
```
- Third way with `pure objects` we can easily implement same behavior with much more concise code
```javascript
const Person = {
    name: "",
    age: 0,
    getInfo(){
        return `Hello, my name is ${this.name}, I am  ${this.age} years old`
    }
}

const Student = {
    school: "",
    gpa: 0,
    getStudentInfo(){
        return `${this.getInfo()}. I graduated from ${this.school} with ${this.gpa} gpa`
    }
}
//make internal [[ProtoType]] link of Student to Person
Object.setPrototypeOf(Student,Person);
Person.isPrototypeOf(Student);//true
Student.__proto__ === Person;//true
Object.getPrototypeOf(Student) === Person;//true

const s1 = Object.create(Student);
s1.name = "Skilaççi";
s1.age = 33;    
s1.gpa = 3.50;
s1.school = "Life University"; 

s1.getInfo(); //"Hello, my name is Skilaççi, I am  33 years old"
s1.getStudentInfo(); //"Hello, my name is Skilaççi, I am  33 years old. I graduated from Life University with 3.5 gpa"

```
