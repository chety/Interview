- Below is our `server` code
```js
const express = require('express');
const app = express();
const port = 3000;

//middleware. If next() does not call then request will not be processed
function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

app.get('/', (req, res) => res.send('Hello World!'));

//second parameter is our middleware
app.get('/users', isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: 'User Userson',
    },
  ]);
});

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'The Bluest Eye',
    },
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
***
- Below is our `client` code
```js
const http = require("http");

http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {authorization:"secretpassword"},
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);

```
