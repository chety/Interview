- With `generators` in typescript we can write generic functions without type limits

```ts
interface IEntity {
    name: string;
    inStock?: boolean;
}

function sortBy<T extends IEntity>(arr: T[], sortFunc: (_: T) => any, descending: boolean = false) {
    const arrCopy = arr.slice();
    return arrCopy.sort((e1, e2) => {
        const result1 = sortFunc(e1);
        const result2 = sortFunc(e2);
        const compare =  result1 > result2 ? 1 : (result1 < result2 ? -1 : 0);
        return descending ? compare * -1 : compare;
    });
};

const product1 = { name: "laptop", price: 1243 };
const product2 = { name: "book", price: 15 };
const product3 = { name: "battery", price: 5200 };
const product4 = { name: "zolando", price: 2 };


const arr = [product1, product2, product3, product4];
console.log(sortBy(arr, p => p.price,true));
```
