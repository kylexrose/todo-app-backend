require('dotenv').config({quiet: true})
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.MONGO_ADDRESS)
.then(()=>{
    app.listen(3000, ()=>{
        console.log("MONGODB CONNECTED.")
        console.log("Server started on port 3000.")
    })
})