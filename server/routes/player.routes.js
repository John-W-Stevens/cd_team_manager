const PlayerController = require("../controllers/player.controller");

module.exports = function(app){
    app.get("/api/players", PlayerController.findAllPlayers);
    app.post("/api/player", PlayerController.createPlayer);
    app.get("/api/player/:id", PlayerController.findOneSinglePlayer);
    app.put("/api/player/:id", PlayerController.updatePlayer);
    app.delete("/api/players/:id", PlayerController.deletePlayer);
}