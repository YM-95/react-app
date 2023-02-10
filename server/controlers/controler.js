
const Workout = require('../models/workoutSchema');


const getOne = (req, res) => {

};

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


const deletePost = (req, res) => {

};


module.exports = {
    getAll,
    createPost,

}