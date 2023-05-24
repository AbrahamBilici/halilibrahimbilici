require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/contact.html', (req, res) => {
    const filePath = __dirname + '/contact.html';
    res.sendFile(filePath);
});



const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

// schema

const contactSchema = new mongoose.Schema({
    personal_info:
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        age_decade: Number,
        lang: String,
        location: String
    }
    ,
    region: String,
    message: String
});

const User = mongoose.model('User', contactSchema);

// post

app.post('/submit', async (req, res) => {
    const { firstName, lastName, email, decade, language, residence, continent, message } = req.body;



    const personalInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        age_decade: decade,
        lang: language,
        location: residence
    };


    try {
        const user = new User({
            personal_info: personalInfo,
            region: continent,
            message: message
        });
        await user.save();
        // Send a response to the client
        res.json({ success: true });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' })
    }


});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
