import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public getUsers(req: express.Request, res: express.Response): void {
        res.send("GET users placeholder");
    }
    public postUsers(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public getStreamingServices(req: express.Request, res: express.Response): void {
        res.send("GET streamingServices placeholder");
    }
    public postStreamingServices(req: express.Request, res: express.Response): void {
        res.send(req.params);
    }

    public getSearchHistory(req: express.Request, res: express.Response): void {
        res.send("GET searchHistory placeholder");
    }
    public postSearchHistory(req: express.Request, res: express.Response): void {
        res.send(req.params);
    }

    public getWatchList(req: express.Request, res: express.Response): void {
        res.send("GET watchList placeholder");
    }
    public postWatchList(req: express.Request, res: express.Response): void {
        res.send(req.params);
    }

    public getSuggestionList(req: express.Request, res: express.Response): void {
        res.send("GET suggestionList placeholder");
    }
    public postSuggestionList(req: express.Request, res: express.Response): void {
        res.send(req.params);
    }
}
