const mailer = require('mailer');

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    let transporter = mailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'your-email@outlook.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: email,
        to: 'seijmonsbergen@outlook.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};