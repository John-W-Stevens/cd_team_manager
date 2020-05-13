const { Player } = require("../models/player.model")

// CRUD Operations for Author Documnet

// Get All Players: READ
module.exports.findAllPlayers = (request, response) => {
    Player.find()
        .then(allPlayers => response.json({Players: allPlayers}))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
};

// Get a Single Player: READ
module.exports.findOneSinglePlayer = (request, response) => {
    Player.find({_id: request.params.id})
        .then(oneSinglePlayer => response.json({ Player: oneSinglePlayer}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};

// Create a Player: CREATE
module.exports.createPlayer = (request, response) => {
    const { name, preferredPosition } = request.body;
    Player.create({
        name,
        preferredPosition,
    })
        .then(Player => response.json(Player))
        .catch(err => response.status(400).json(err))
};

// Update a Player: UPDATE
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(error => response.status(400).json(error))
}

// Delete a Player: DELETE
module.exports.deletePlayer= (request, response) => {
    Player.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}