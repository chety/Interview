- We can use(**more accurately _mimic_**) `inheritance` in typescript.

***
#### person.ts
```typescript
class Person {
    constructor(public firstName: string, public lastName: string, private age: number) {

    }
    greetMe(): string {
        return `My Name is ${this.firstName} ${this.lastName}. I am ${this.age} years old`
    }
}

export class Student extends Person {

    /**
     * We can not write access modifiers with parent class props (firstName,lastName,age)
     */
    constructor(firstName: string, lastName: string, age: number, private grade: string) {
        super(firstName, lastName, age);
    }
    greetMe() {
        return `${super.greetMe()}. I am in the ${this.grade} grade`;
    }
}
```
#### main.ts
```typescript
const student = new Student("Alaan", "Isaac", 22, "10th");
console.log(student.greetMe());
```
