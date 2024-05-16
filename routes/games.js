     // routes/games.js
     const gamesRouter = require("express").Router(); // Создали роутер
     const { sendAllGames } = require("../controllers/games")
     const { getAllGames, deleteGame, addGameController } = require("../middlewares/games")
     
     gamesRouter.get("/games", getAllGames, sendAllGames)
     gamesRouter.delete("/games/:id", getAllGames, deleteGame);
     gamesRouter.post("/games", getAllGames, addGameController) 
     
     module.exports = gamesRouter;
     