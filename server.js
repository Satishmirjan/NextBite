



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();





    mongoose.connect('mongodb://localhost:27017/NextBite')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    
app.use(bodyParser.json());
app.use(cors());



const userRoutes = require('./routes/users');
const mealRoutes = require('./routes/meals');

app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
