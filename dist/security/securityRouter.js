"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const securityController_1 = require("./securityController");
const securityMiddleware_1 = require("./securityMiddleware");
// Router for security portion of the api
class SecurityRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new securityController_1.SecurityController();
    }
    // called by the framework to add the routes for the security portion of the API
    getRouter() {
        const securityController = new securityController_1.SecurityController();
        this.router.get("/authorize", [securityMiddleware_1.SecurityMiddleware.RequireAuth], securityController.authorize);
        this.router.post("/login", securityController.login);
        this.router.post("/register", securityController.register);
        this.router.post("/changepwd", [securityMiddleware_1.SecurityMiddleware.RequireAuth], securityController.changePwd);
        return this.router;
    }
}
exports.SecurityRouter = SecurityRouter;
//# sourceMappingURL=securityRouter.js.map