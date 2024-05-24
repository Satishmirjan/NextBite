const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/NextBite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const seedUsers = async () => {
    const users = [
        { username: 'satish', password: 'hello' },
        { username: 'admin', password: 'password123' },
        { username: 'user1', password: 'password1' }
    ];

    try {
        await User.insertMany(users);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedUsers();
