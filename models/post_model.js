const mongoose = require("mongoose");

const PostModel = mongoose.model(

    "person",

    {
        nom : {
            type: String,
            require: true
        },
        age : {
            type: Number,
            require: true
        },
        favoriteFoods : {
            type: Array,
            require: true
        },
        date : {
            type: Date,
            default: Date.now
        }
    },

    "personlist"
)


module.exports =  PostModel;