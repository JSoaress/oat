const emailController = require('./EmailController')

module.exports = {
    async sendEmailContact(req, res) {
        try {
            const { name, email } = req.body
    
            const recipient = {
                to: email,
                subject: "Bem vindo a nossa plataforma",
                text: `Olá ${name}, seja bem vindo!!!`,
                html: "<b>Vc sabia que a frase SUBI NO ONIBUS ao contrário é SUBI NO ONIBUS?</b>"
            }
    
            await emailController.sendEmail(recipient)
    
            return res.status(200).json()
        } catch (error) {
            console.log(error)
            return res.status(500).json()
        }
    }
}