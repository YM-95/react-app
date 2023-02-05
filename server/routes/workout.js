
const express = require("express");
const router = express.Router();
const Workout = require('../models/workoutSchema')




//GET ALL
router.get('/', (req, res) => {
    res.json({ home: 'Hello Home Page' })
});

//GET SILNGLE ITEM

router.get('/:id', async (req, res) => {


});

//POST
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (err) {
        console.log(err.message);
    }
});

//DELETE
router.delete('/:id', (req, res) => {

});

//UPDATE
router.post('/:id', (req, res) => {

})


module.exports = router;
