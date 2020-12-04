import express from "express";
import { SecurityController } from "./securityController";
import { SecurityMiddleware } from "./securityMiddleware";

// Router for security portion of the api
export class SecurityRouter {
    private router: express.Router = express.Router();
    private controller: SecurityController = new SecurityController();

    // called by the framework to add the routes for the security portion of the API
    public getRouter(): express.Router {
        const securityController: SecurityController = new SecurityController();
        this.router.get("/authorize", [SecurityMiddleware.RequireAuth], securityController.authorize);
        this.router.post("/login", securityController.login);
        this.router.post("/register", securityController.register);
        this.router.post("/changepwd", [SecurityMiddleware.RequireAuth], securityController.changePwd);

        return this.router;
    }
}
