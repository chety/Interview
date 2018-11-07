export default class Api {
    static getAllCars() {
        fetch('http://localhost:3001/cars')
            .then(r => r.json())
            .then(r => console.log(r));
    }
}

