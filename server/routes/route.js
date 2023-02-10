const { createPost, getAll } = require('../controlers/controler')
const express = require("express");
const router = express.Router();





//GET ALL
router.get('/all', getAll);

//GET SILNGLE ITEM

router.get('/:id', async (req, res) => {


});

//POST
router.post('/', createPost);

//DELETE
router.delete('/:id', (req, res) => {

});

//UPDATE
router.post('/:id', (req, res) => {

})


module.exports = router;
