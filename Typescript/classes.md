- We can create _so-called_ classes in `Typescript`. But as a remainder **There is no actual class mechanims in typescript/javascript**
- Classes are basically functions. For more info see: https://github.com/chety/Interview/blob/master/Javascript/classes.md
***
#### intro.ts
```typescript
export enum ProgrammingLanguages {
    CSharp = 12,
    Java = 22,
    Kotlin = 4,
    Go = 1
}

function person(name: string): string;
function person(age: number): string;
function person(isMarried: boolean): string;

function person(value: string | number | boolean): string {
    switch (typeof value) {
        case "string":
            return `My name is ${value}.`;
        case "number":
            return `I am ${value} years old.`;
        case "boolean":
            return `${value ? "I am married." : "I am single."}`

        default:
            break;
    }
}

const writeFullName = (firstName: string, lastName: string) => `Name:${firstName} -- LastName:${lastName}`

export class IntroductionToTs {

    /**
     * 
     * This properties are  automatically defined as class member , thanks to public modifier
     */
    constructor(public message: string, public country: string, public inEurope: Boolean, private code: number) {

    }

    /**
     * return toString representation of the this instance
     */
    public getInfo(): string {
        return `Message:${this.message}.
                Country:${this.country}.
                In Europe:${this.inEurope ? "Yes" : "No"}
                Code: ${this.code}`;
    }

    /**
     * getClassInfo
     * returns class name
     */
    public static getClassInfo(): string {
        return "HelloWorld";
    }

    /**
     * returns creator company of the language
     * @param language {ProgrammingLanguages} language name
     */
    public GetLanguageCreator(language: ProgrammingLanguages): string {
        switch (language) {
            case ProgrammingLanguages.CSharp:
                return "Microsoft";
            case ProgrammingLanguages.Go:
                return "Google";
            case ProgrammingLanguages.Java:
                return "Sun Microsystem";
            case ProgrammingLanguages.Kotlin:
                return "JetBrains";
            default:
                return "Unknown creator";
        }
    }

    GetSum(num1: number, num2: number, num3?: number) {
        let sum = num1 + num2;
        if (num3) { // same as if(num3 != undefined)
            sum += num3;
        }
        return sum;
    }

    GetSumWithDefaultParams(num1: number, num2: number, num3: number = 0) {
        return num1 + num2 + num3;
    }

    GetSumWithRestParams(num1: number, num2: number, ...numbers: number[]): number {
        let sum = num1 + num2;
        for (const num of numbers) {
            sum += num;
        }
        return sum;
    }

    GetPersonInfo(): string {
        let message = person("chety");
        message += person(31);
        message += person(true);
        return message;
    }
    get FullName(): string {
        return writeFullName("Chety", "Clooney");
    }


    public get Code(): string {
        return `+${this.code}`
    }

}

```

#### Main.ts
```typescript
import { IntroductionToTs } from "./intro";

const instance = new IntroductionToTs("Be careful guys", "United States", false, 1);

console.log(instance.getInfo());
console.log(IntroductionToTs.getClassInfo());
console.log(instance.GetLanguageCreator(ProgrammingLanguages.Kotlin));
console.log(`Sum with 3 params: ${instance.GetSum(12, 23, -3)}`);
console.log(`Sum with 2 params: ${instance.GetSum(12, 23)}`); 
console.log(`Sum with 2 params: ${instance.GetSumWithDefaultParams(12, 23)}`);
console.log(`Sum with 3 params: ${instance.GetSumWithDefaultParams(12, 23, -3)}`);
console.log(`Sum with rest params: ${instance.GetSumWithRestParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)
console.log(`Message is : ${instance.GetPersonInfo()}`)
console.log(instance.Code);
console.log(instance.FullName);
```
