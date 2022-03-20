const twilio = require('twilio');
const dotenv = require('dotenv');
const node_cron = require('node-cron');

dotenv.config();

async function send_message(message){

    // Get the variables
    let accountSid = process.env.TWILIO_ACCOUNT_SID;
    let authToken = process.env.TWILIO_AUTH_TOKEN;
    let senderPhone = process.env.TWILIO_PHONE_NUMBER;

    // Initialize the client
    const client = new twilio(accountSid, authToken);

    // Send a message
    let response = await client.messages.create({
        body: message,
        from: senderPhone,
        to: '+254791569999'
    });

    console.log(response);
}


// Run the function after every five minutes

node_cron.schedule('*/5 * * * *', () => {
    console.log("Running after every five mins")
    send_message('Hello There!');
});