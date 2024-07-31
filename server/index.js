const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const createfolder = require('./routes/createfolder.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const createTypebot = require('./routes/createTypebot.js');
const response = require('./routes/response.js');
const {verifyToken} = require('./middlewares/verifytoken.js');
const path = require('path');
dotenv.config();

const Port = 3000;

const app = express();
app.use(cors({
    origin: 'https://form-builder-three-mu.vercel.app/', // Replace with your frontend domain
  }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());


mongoose.connect(process.env.Mongo_Url)
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error connecting to database:', err);
});

app.use('/user', user);
app.use('/typebot', createTypebot);
app.use('/', createfolder);
app.use('/response', response);


app.post('/auth/restore-session', verifyToken, (req, res) => {
    res.json({ message: 'Session restored', user: req.user });
  });

app.get('/health', (req, res) => {
    res.json({
        message: 'Job listing API is working fine',
        status: 'Working',
        date: new Date().toLocaleDateString()
    });
})



app.use("*", (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        status: 'Error',
    });
});
  
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});