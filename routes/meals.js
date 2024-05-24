const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');


router.get('/:date', async (req, res) => {
    const { date } = req.params;
    const meals = await Meal.find({ date });
    res.status(200).json(meals);
});

router.post('/', async (req, res) => {
    const { date, username, breakfast, lunch, dinner, snack } = req.body;
    const meal = new Meal({ date, username, breakfast, lunch, dinner, snack });
    try {
        await meal.save();
        res.status(201).send('Meal preferences saved');
    } catch (err) {
        res.status(400).send('Error saving meal preferences');
    }
});

module.exports = router;
