require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact Form Endpoint
app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // Your Gmail address
                pass: process.env.PASSWORD // App Password (not your Gmail password)
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: "iyenagberaymond@gmail.com", // Your email where messages should be sent
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: "Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
