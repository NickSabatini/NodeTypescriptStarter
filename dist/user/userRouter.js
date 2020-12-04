"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./userController");
class UserRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new userController_1.UserController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        // Leaving 'hello' endpoint here for testing purposes
        this.router.get("/hello", this.controller.getHello);
        this.router.post("/hello", this.controller.postHello);
        this.router.get("/users", this.controller.getUsers);
        this.router.post("/users", this.controller.postUsers);
        this.router.get("/users/:userID/streamingServices", this.controller.getStreamingServices);
        this.router.post("/users/:userID/streamingServices", this.controller.postStreamingServices);
        this.router.get("/users/:userID/searchHistory", this.controller.getSearchHistory);
        this.router.post("/users/:userID/searchHistory", this.controller.postSearchHistory);
        this.router.get("/users/:userID/watchList", this.controller.getWatchList);
        this.router.post("/users/:userID/watchList", this.controller.postWatchList);
        this.router.get("/users/:userID/suggestionList", this.controller.getSuggestionList);
        this.router.post("/users/:userID/suggestionList", this.controller.postSuggestionList);
        return this.router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=userRouter.js.map