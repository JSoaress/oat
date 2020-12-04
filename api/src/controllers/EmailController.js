const nodemailer = require('nodemailer')
const configEmail = require('../assets/util/configEmail.json')

// CRIE UMA CÓPIA DO ARQUIVO configEmail.json E CONFIGURE COM SEUS DADOS

module.exports = {
    async sendEmail(recipient) {
        const transporter = nodemailer.createTransport({
            host: configEmail.smtp,
            port: configEmail.port,
            secure: true,
            auth: {
                user: configEmail.user,
                pass: configEmail.pass
            }
        })

        const info = await transporter.sendMail({
            from: configEmail.user,
            to: recipient.to,
            subject: recipient.subject,
            text: recipient.text,
            html: recipient.html
        })

        console.log("Message sent: %s", info.messageId);
    }
}