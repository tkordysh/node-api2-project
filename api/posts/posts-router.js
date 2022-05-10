// implement your posts router here
const express = require('express');
const Post = require('./posts-model')
const router = express.Router();


//GET all
router.get('/', (req, res) => {
    Post.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "The posts information could not be retrieved" })
    })
})

//GET by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
    .then(post => {
        if(post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist" })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "The post information could not be retrieved" })
    })
})


module.exports = router;