"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoDB_1 = require("../common/MongoDB");
const config_1 = require("../config");
const favoritesModel_1 = require("./favoritesModel");
class UserController {
    getHello(req, res) {
        res.send("Hello World");
    }
    postHello(req, res) {
        res.send(req.body);
    }
    getUsers(req, res) {
        res.send("GET users placeholder");
    }
    postUsers(req, res) {
        res.send(req.body);
    }
    getStreamingServices(req, res) {
        res.send("GET streamingServices placeholder");
    }
    postStreamingServices(req, res) {
        res.send(req.params);
    }
    getSearchHistory(req, res) {
        res.send("GET searchHistory placeholder");
    }
    postSearchHistory(req, res) {
        res.send(req.params);
    }
    getFavorite(req, res) {
        console.log("test");
        UserController.db.getRecords(UserController.favoritesTable, { email: req.get("email") })
            .then((userRecords) => {
            if (userRecords) {
                return res.status(200).send(userRecords);
            }
        }).catch((reason) => res.sendStatus(500).end());
    }
    postFavorite(req, res) {
        const user = new favoritesModel_1.FavoriteModel(req.body.email, req.body.id);
        UserController.db.getOneRecord(UserController.favoritesTable, { email: req.body.email, id: req.body.id })
            .then((userRecord) => {
            if (userRecord) {
                return res.status(400).send({ fn: "postFavorite", status: "failure", data: "Favorite already exists for user" }).end();
            }
            UserController.db.addRecord(UserController.favoritesTable, user.toObject()).then((result) => res.send({ fn: "postFavorite", status: "success" }).end())
                .catch((reason) => res.sendStatus(500).end());
        }).catch((reason) => res.sendStatus(500).end());
    }
    deleteFavorite(req, res) {
        const user = new favoritesModel_1.FavoriteModel(req.body.email, req.body.id);
        UserController.db.getOneRecord(UserController.favoritesTable, { email: req.body.email, id: req.body.id })
            .then((userRecord) => {
            if (!userRecord) {
                return res.status(400).send({ fn: "deleteFavorite", status: "failure", data: "Favorite does not exist" }).end();
            }
            UserController.db.deleteRecord(UserController.favoritesTable, user.toObject()).then((result) => res.send({ fn: "deleteFavorite", status: "success" }).end())
                .catch((reason) => res.sendStatus(500).end());
        }).catch((reson) => res.sendStatus(500).end());
    }
    getSuggestionList(req, res) {
        res.send("GET suggestionList placeholder");
    }
    postSuggestionList(req, res) {
        res.send(req.params);
    }
}
exports.UserController = UserController;
UserController.db = new MongoDB_1.Database(config_1.Config.url, "userdata");
UserController.favoritesTable = "favorites";
//# sourceMappingURL=userController.js.map