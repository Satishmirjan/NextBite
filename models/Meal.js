const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    date: { type: String, required: true },
    username: { type: String, required: true },
    breakfast: { type: Boolean, default: false },
    lunch: { type: Boolean, default: false },
    dinner: { type: Boolean, default: false },
    snack: { type: Boolean, default: false }
});

module.exports = mongoose.model('Meal', mealSchema);
