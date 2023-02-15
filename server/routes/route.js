const { createPost, getAll, getOne, deletePost } = require('../controlers/controler')
const express = require("express");
const router = express.Router();





//GET ALL
router.get('/', getAll);

//GET SILNGLE ITEM

router.get('/:id', getOne);

//POST
router.post('/', createPost);

//DELETE
router.delete('/:id', deletePost);

//UPDATE
router.post('/:id', (req, res) => {

})


module.exports = router;
