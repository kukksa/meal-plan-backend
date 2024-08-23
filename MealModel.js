const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true //чтобы подтверждать что это тектовая форма
    }
})

module.exports = mongoose.model('Meal', mealSchema );//2 аргумента (первый уникальное имя для модели, второй аргумент - схема, которая используется для создания модели)