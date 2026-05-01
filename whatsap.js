const twilio = require('twilio');

// 🔑 Replace with your credentials
const accountSid = 'ABCDECDXKNFVXNJVKJFSHSSDKS';
const authToken = 'MSMNCSVCJHVCZCSGCBSDBGASDDS';

const client = new twilio(accountSid, authToken);

// 📲 Send WhatsApp Message
client.messages
  .create({
    from: 'whatsapp:+14155238886',   // Twilio Sandbox Number
    to: 'whatsapp:+9163529XXXXX',    // Your number (with country code)
    body: '🧾 Your bill is ₹500\nThank you for shopping!'
  })
  .then(message => console.log('Message Sent! SID:', message.sid))
  .catch(error => console.log('Error:', error));