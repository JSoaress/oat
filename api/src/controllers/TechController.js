const Tech = require('../models/Tech')

module.exports = {
    async list(req, res) {
        const techs = await Tech.find()

        return res.status(200).json(techs)
    },

    async create(req, res) {
        let tech = req.body

        const file = req.files.img_url
        file.mv(`./uploads/${file.name}`)

        tech = {
            ...tech,
            'img_url': file.name
        }

        const newTech = await Tech.create(tech)

        return res.status(201).json(newTech)
    },

    async update(req, res) {
        const id = req.params.id

        const tech = req.body

        const techUpdated = await Tech.findOneAndUpdate({ _id: id }, tech, { new: true })

        if(!techUpdated) {
            return res.status(400).json('Tecnologia não encontrada. :(')
        }

        return res.status(204).json(techUpdated)
    },

    async delete(req, res) {
        const id = req.params.id

        const todoDeleted = await Tech.findOneAndDelete({ _id: id })

        if(!todoDeleted) {
            return res.status(400).json('Tecnologia não encontrada. :(')
        }

        return res.status(204).json()
    }
}