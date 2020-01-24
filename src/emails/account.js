//const sendgridAPIkey = "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"
const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guerrerosagrado@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app ${name}`
    })
}

sendFinalEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'guerrerosagrado@gmail.com',
        subject: "We're sorry to see you go",
        text: `${name}, would you mind letting us know Y U leave`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendFinalEmail
}