# DevBootCamper-API
 Custom API built using node-js, express-js, and mongoDB.

# Set up Routes folder with routes file
  Use express routes to route your user to the different routes
  const express = require('express')
  const routes = express.Routes()

  remember to export the module at the end 
  module.exports = router

# Bringing in the routes file into server.js
  set up var to require the file 
    const name-of-variable  = require('./filename to routes)

  Mount routers on server.js
    using app.use pass in the specific route it will use as an argument and pass in the variable with the filename to routes
      app.use('/api/v1/bootcamps', filename of routes)

# Creating Controllers(methods) for routes
  set up a new folder controllers
  file inside filename.js

  this is where all specific methods that pertain to a specific route will live.

  all methods must be exported 
    exports.methodName = (req,res,next) => { functionallity }
