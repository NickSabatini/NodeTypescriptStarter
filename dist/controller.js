"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    getHello(req, res) {
        const MovieDB = require('node-themoviedb');
        // ES6 Style
        // import MovieDB from 'node-themoviedb';
        const mdb = new MovieDB("19c64f4f9f25a75eb15fb7d09a07f1a4");

        (async () => {
            try {
                const args = {
                    pathParameters: {
                        movie_id: 384018,
                    },
                };
                const movie = await mdb.movie.getDetails(args);
                res.send(movie.data.title);
                /*
                  {
                    data: Object. Parsed json data of response
                    headers: Object. Headers of response
                  }
                */
            } catch (error) {
                console.error(error);
            }
        })();
        
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