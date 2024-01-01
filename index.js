//import json server library in index.js file
const jsonServer = require('json-server')

//create json-server
const restaurantServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
restaurantServer.use(middleware)
restaurantServer.use(router)

//setup port for running server
const port = 5000 || process.env.PORT 


//to listen server for resolving request from client
restaurantServer.listen(port,()=>{
    console.log(`restaurantserver started at ${port}  and waiting for the request`);
})