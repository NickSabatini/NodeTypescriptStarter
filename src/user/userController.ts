import express from "express";
import {Database} from "../common/MongoDB";
import {Config} from "../config";
import {FavoriteModel} from "./favoritesModel";

export class UserController {
    public static db: Database = new Database(Config.url, "userdata");
    public static favoritesTable = "favorites";

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

    public getFavorite(req: express.Request, res: express.Response): void {
        UserController.db.getRecords(UserController.favoritesTable, { email: req.get("email") })
            .then((userRecords: any) => {
                if (userRecords) { return res.status(200).send(userRecords); }
            }).catch((reason: any) => res.sendStatus(500).end());
    }
    public postFavorite(req: express.Request, res: express.Response) {
        const user: FavoriteModel = new FavoriteModel(req.body.email, req.body.title);
        UserController.db.getOneRecord(UserController.favoritesTable, { email: req.body.email, title: req.body.title })
            .then((userRecord: any) => {
                if (userRecord) { return res.status(400).send({ fn: "postFavorite", status: "failure", data: "Favorite already exists for user" }).end(); }
                UserController.db.addRecord(UserController.favoritesTable, user.toObject()).then((result: boolean) => res.send({ fn: "postFavorite", status: "success" }).end())
                    .catch((reason: any) => res.sendStatus(500).end());
            }).catch((reason: any) => res.sendStatus(500).end());
    }
    public deleteFavorite(req: express.Request, res: express.Response) {
        const user: FavoriteModel = new FavoriteModel(req.body.email, req.body.title);
        UserController.db.getOneRecord(UserController.favoritesTable, { email: req.body.email, title: req.body.title })
            .then((userRecord: any) => {
                if (!userRecord) { return res.status(400).send({ fn: "deleteFavorite", status: "failure", data: "Favorite does not exist" }).end(); }
                UserController.db.deleteRecord(UserController.favoritesTable, user.toObject()).then((result: boolean) => res.send({ fn: "deleteFavorite", status: "success" }).end())
                    .catch((reason: any) => res.sendStatus(500).end());
            }).catch((reson: any) => res.sendStatus(500).end());
    }

    public getSuggestionList(req: express.Request, res: express.Response): void {
        res.send("GET suggestionList placeholder");
    }
    public postSuggestionList(req: express.Request, res: express.Response): void {
        res.send(req.params);
    }
}
