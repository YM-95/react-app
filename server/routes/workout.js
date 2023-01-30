import { getRounds } from "bcrypt";
import express from "express";

export const router = express.Router();


//GET ALL
router.get('/', (req, res) => {
    res.json({ home: 'Hello Home Page' })
});

//GET SILNGLE ITEM

router.get('/:id', (req, res) => {

});

//POST
router.post('/:id', (req, res) => {

});

//DELETE
router.delete('/:id', (req, res) => {

});

//UPDATE
router.post('/:id', (req, res) => {

})



