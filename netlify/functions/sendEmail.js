const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para 465, false para otros puertos como 587
    auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo de Microsoft 365
        pass: process.env.EMAIL_PASS, // Contraseña o contraseña de aplicación
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

const mailOptions = {
  from: process.env.EMAIL_USER, // Tu correo electrónico de Microsoft 365
  to: process.env.EMAIL_USER, // Tu mismo correo para recibir la notificación
  subject: subject,
  text: message,
};

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
