const mongoose = require('mongoose')

const TechSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    img_url: {
        type: String
    }
}, {
    collection: 'techs'
})

module.exports = mongoose.model('tech', TechSchema)