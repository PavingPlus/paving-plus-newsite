const express = require("express");
const cors = require("cors");;
const nodemailer = require("nodemailer")


const app = express();


const PORT = process.env.PORT || 8000;



app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.json({ msg: "Paving+-Backend API." })
})

app.post("/contact/send-mail", (req, res) => {
    const { question,  fullName, email, subject } = req.body;
    // question,  fullName, email, subject
    const output = `
            <h4> Contact us form detail. </h4>
            <p><strong>Question : </strong> ${question}</p>
            <p><strong>Name : </strong> ${fullName}</p>
            <p><strong>Email : </strong> ${email}</p>
            <p><strong>Subject : </strong> ${subject}</p>
            <br />
            <p>Thank you</p>
           `


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "support@paving-plus.com", // generated ethereal user 
            pass: "hsnwgrkjqlnhgtmf", // generated ethereal password 
        },
    });

    let mailOption = {
        from: 'support@paving-plus.com', // sender address
        to: 'support@paving-plus.com', // list of receivers
        subject: "You got a new query for Paving+ ", // Subject line
        text: "You got a new query for Paving+", // plain text body
        html: output, // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            res.json(error)
        } else {
            const data = info.messageId;
            res.json({ message: "Message sent", data })
        }
    });

})


app.post("/team/send-mail", (req, res) => {
    const { fullName, email, number, question } = req.body;
    // fullName, email, number, question
    const output = `
            <h4> Contact us form detail. </h4>
            <p><strong>Name : </strong> ${fullName}</p>
            <p><strong>Email : </strong> ${email}</p>
            <p><strong>Phone : </strong> ${number}</p>
            <p><strong>Message : </strong> ${question}</p>
            <br />
            <p>Thank you</p>
           `


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "support@paving-plus.com", // generated ethereal user 
            pass: "hsnwgrkjqlnhgtmf", // generated ethereal password 
        },
    });

    let mailOption = {
        from: 'support@paving-plus.com', // sender address
        to: 'support@paving-plus.com', // list of receivers
        subject: "You got a new query for Paving+ ", // Subject line
        text: "You got a new query for Paving+", // plain text body
        html: output, // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            res.json(error)
        } else {
            const data = info.messageId;
            res.json({ message: "Message sent", data })
        }
    });

})


app.post("/popup/send-mail", (req, res) => {
    const { fullName, email, number, subject, question } = req.body;
    // fullName, email, number, question
    const output = `
            <h4> Contact us form detail. </h4>
            <p><strong>Name : </strong> ${fullName}</p>
            <p><strong>Email : </strong> ${email}</p>
            <p><strong>Phone : </strong> ${number}</p>
            <p><strong>Subject : </strong> ${subject}</p>
            <p><strong>Message : </strong> ${question}</p>
            <br />
            <p>Thank you</p>
           `


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "support@paving-plus.com", // generated ethereal user 
            pass: "hsnwgrkjqlnhgtmf", // generated ethereal password 
        },
    });

    let mailOption = {
        from: 'support@paving-plus.com', // sender address
        to: 'support@paving-plus.com', // list of receivers
        subject: "You got a new query for Paving+ ", // Subject line
        text: "You got a new query for Paving+", // plain text body
        html: output, // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            res.json(error)
        } else {
            const data = info.messageId;
            res.json({ message: "Message sent", data })
        }
    });

})

app.listen(PORT, () => {
    console.log(`Server Listening at PORT : ${PORT}`);
})