// Fifth task (try to send your self email)
const http = require("http")
const port = 3000
const nodemailer = require("nodemailer")

http.createServer((req, res) => {

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 587,
        secure: false, 
        auth: {
          user: "679c513d92b6d3",
          pass: "52c2f96a667005",
        },
      });

      async function main() {
        
        const info = await transporter.sendMail({
          from: 'amadoud.wade@gmail.com', 
          to: "amadoud.wade@gmail.com", 
          subject: "Hello ✔", 
          text: "Hello world?", 
          html: "<b>Hello world?</b>", 
        });
      
        console.log("Message sent: %s", info.messageId);
        
      }
      main().catch(console.error);

}).listen(port);
