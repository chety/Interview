- It is very easy to build an `http web server` in node. _Node_ has a built-in `http` module
- However using a _framework_ like **Express** is much more convenient. Because `Express` is much more handy and easy to use
- `Express` provides many `middlewares` which can be very useful when developing a web server.
  - `Middlewares` are executed whenever a request is made to the server by the client. 
  - Generally _middlewares_ are used for `parsing request data`, `logging`,`authentication/authorization` ...etc

```js
//dotenv middleware is used to manage environment variables. Create an ".env" file in project directory 
//and insert data as "PORT=3000"
require('dotenv').config();

const express = require('express');
const server = express();

//that is used for parsing request data as json or which format you want
const bodyParser = require('body-parser'); 

const PORT = process.env.PORT || 3000;

//ıf you do not use one of the statement in below, our req.body will be undefinde in post/put
// server.use(express.json());
server.use(bodyParser.json({ extended: false }));

server.get('/', (req, res) => {
  res.send('Hello World. How are you today? Thank you very much');
});

//http://localhost:3000/courses?id="TDD"&type="testing"
server.get('/courses', (req, res) => {
  console.log('Query parameters:', req.query);
  res.send('Courses are great');
});

//http://localhost:3000/products/1/orders/1234
server.get('/products/:id/orders/:orderId', (req, res) => {
  console.log('Params**', req.params);
  const id = Number(req.params.id);
  console.log('Id ->', id);
  res.status(200).jsonp({ id: 33, product: 'laptop' });
});

//post is used to insert data
server.post('/persons', (req, res) => {
  console.log('Body:', req.body);
  res.json({ id: 1, name: 'Chety Clooney' });
});

//get any request that is invalid
//For example http://localhost:3000/kljlj  will hit here
server.get('**', (_, res) => {
  console.log('Yeah body ');
  res.status(404).send('Invalid request');
});

server.listen(PORT, () => {
  console.info(`Host is ${process.env.HOST} `);
  console.info(`Server is listening on ${PORT}`);
});

```
