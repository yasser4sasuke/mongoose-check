const express = require("express");
const router = express.Router();
const PostModel = require("../models/post_model");


// get
router.get("/", (req, res) => {
    PostModel.find((err, docs) => { 
        if(!err) {
            res.send(docs)
        }else{
            console.log(`Get error: ${err}`)
        }
    })
})

//post 
router.post('/', (req, res) => {
    const newPerson = new PostModel({
        nom: req.body.nom,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods,
        date: req.body.date
    });

    newPerson.save((err, docs) => {
        if(!err) {
            res.send(docs)
        }else{
            console.log(`Post error: ${err}`)
        }
    })
})

module.exports = router;