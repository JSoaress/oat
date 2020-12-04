const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('uploads'))

// Mongo
mongoose.connect('mongodb://root:rootpwd@localhost:27017/oat?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use('/api', require('./routes'))

app.listen(3333)