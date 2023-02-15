const Workout = require('../models/workoutSchema');
const mongoose = require('mongoose')



// GET ONE 

const getOne = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such value!' });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: "Oops.." })
    }

    res.status(200).json(workout)
};


//GET ALL 

const getAll = async (req, res) => {

    const workouts = await Workout.find().sort({ createdAt: -1 })
    res.status(200).json(workouts);

};



//CREATE new post in db

const createPost = async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (err) {
        console.log(err.message);
    }
};


const deletePost = async (req, res) => {

    const { id } = req.params;

    const workout = await Workout.deleteOne(id)

    res.status(200).json(workout)

};


module.exports = {
    getOne,
    getAll,
    createPost,
    deletePost
}