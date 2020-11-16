"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    getHello(req, res) {
        res.send("Hello");
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
    getWatchList(req, res) {
        res.send("GET watchList placeholder");
    }
    postWatchList(req, res) {
        res.send(req.params);
    }
    getSuggestionList(req, res) {
        res.send("GET suggestionList placeholder");
    }
    postSuggestionList(req, res) {
        res.send(req.params);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map