> It is possible to create `interfaces` in **typescript**. _Typescript is a superset of Javascript_ which compiles to javascript at the end
***
```typescript
interface IPhone {
    modelNumber: string;
    year: number;
    phoneInfo(): string;
}

class ClassicPhone implements IPhone {
    /**
     * 
     * @param modelNumber {string} model number of phone
     * @param year {number} production year of the phone
     */
    constructor(public modelNumber: string, public year: number) {

    }
    phoneInfo() {
        return `Classic phone. Model Number: ${this.modelNumber}, year: ${this.year}`
    }
}

class ModernPhone implements IPhone {
    constructor(public modelNumber: string, public year: number) {

    }
    phoneInfo() {
        return `Modern phone. Model Number: ${this.modelNumber}, year: ${this.year}`
    }
}

export function PolymorphicMethod() {
    const classicPhone = new ClassicPhone("A-12", 2020);
    const modernPhone = new ModernPhone("Iphone-X", 2021);
    const phones: IPhone[] = [classicPhone, modernPhone];
    phones.forEach(phone => console.log(phone.phoneInfo()));
}

```
