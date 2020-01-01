const express = require('express')
const app = express()

const index = require('./routes')
const PhoneShit = require('./routes/PhoneShit')
const BookStore = require('./routes/BookStore')

app.set('view engine','ejs')

app.use(express.static(__dirname + '/assets'))

app.use('/',index)
app.use('/phone',PhoneShit)
app.use('/book',BookStore)

const PORT =  process.env.PORT || 6969 
app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})