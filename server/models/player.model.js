const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            3,
            "Name must contain at least 3 characters"
        ]
    },
    preferredPosition: String
    
}, {timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema)