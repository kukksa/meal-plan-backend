const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');

const router = Router();

// router.get('/', (req, res) => {
//     res.json({test: 'WE GOT HERE!'})
// })

//переписываем:

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal); //или delete
router.put('/editMeal', editMeal); //или post


module.exports = router;