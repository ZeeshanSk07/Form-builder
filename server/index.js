const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const createfolder = require('./routes/createfolder.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const createTypebot = require('./routes/createTypebot.js');
const response = require('./routes/response.js');
const cookieParser = require('cookie-parser');
const {verifyToken} = require('./middlewares/verifytoken.js');
const path = require('path');
dotenv.config();


const app = express();
app.use(cors());
const Port = 4000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use('/user', user);
app.use('/typebot', createTypebot);
app.use('/', createfolder);
app.use('/response', response);




mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error connecting to database:', err);
    });

    app.get('/health', (req, res) => {
        res.json({
            message: 'Job listing API is working fine',
            status: 'Working',
            date: new Date().toLocaleDateString()
        });
    })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.use("*", (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found',
        status: 'Error',
    });
});
  
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});