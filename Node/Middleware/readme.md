- In some cases, when a request reaches a web application, you might need to verify that the user is logged in or 
that they are allowed to see the particular resource.

### Request steps
Think of handling a request as a series of steps. If the user needs to be logged in to handle a resource, the steps might look like this:
  - `Pre request:`: Investigate whether the user sent the proper credentials through a request header. If the credentials are verified, send the request to the next step.
  - `Construct the response`: Talk to some kind of data source, like a database or an endpoint. This step returns the resource, as long as the request asks for the resource correctly.
  - `Post request`:his is an optional step to run a piece of code after the request is handled. You might run this step for logging purposes.
  
  
```js
app.use((req, res, next) => {})
```
The method passed into use() has three parameters, req, res, and next. The parameters have the following meanings:

  - `req`: This parameter is the incoming request. It contains request headers and the calling URL. It might also have a body of data if the client sent data with their request.
  - `res`: This parameter is a response stream. Use this stream to write information such as headers and data that you want to send back to the calling client.
  - `next`: This parameter signals that the request is OK and that you are ready to process it. **If next() isn't called, processing of the request stops**. Also, it's good practice to tell the client why the request is not processed. For example, call res.send('').
  
  ```js
  app.use((req, res, next) => {
  // pre request
  })
  
  app.get('/protected-resource', () => {
    // handling the actual request
  })
  
  app.use((req, res, next) => {
    // post request
  })

  app.get('/login', () => {})
  ```
  You can also run pre request middleware code as an argument to the request handling, like this:
  
  ```js
    app.get(
    '/<some route>',
   () => {
     // pre request middleware
   }, () => {
     // handling the actual request
   })
  ```
