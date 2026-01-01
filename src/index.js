import connectDB from './db/index.js'
import dotenv from 'dotenv'
dotenv.config({
    path: './.env',
})
import {app} from './app'

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000 ,() => {
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
