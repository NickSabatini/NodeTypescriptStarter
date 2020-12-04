"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const MongoDB_1 = require("../common/MongoDB");
const config_1 = require("../config");
const userModel_1 = require("./userModel");
// Implementation of security endpoints
class SecurityController {
    // login - POST
    // expects email and password fields to be set in the body of the post request
    // sends a token to the caller on success, 401 on failure
    login(req, res, next) {
        SecurityController.db.getOneRecord(SecurityController.usersTable, { email: req.body.email })
            .then((userRecord) => {
            if (!userRecord) {
                return res.sendStatus(401).end();
            }
            const usr = userModel_1.UserModel.fromObject(userRecord);
            if (!usr.validatePassword(req.body.password)) {
                return res.sendStatus(401).end();
            }
            const token = jsonwebtoken_1.default.sign(usr.toObject(), config_1.Config.secret, { expiresIn: config_1.Config.tokenLife });
            res.send({ fn: "login", status: "success", data: { token, user: { email: req.body.email } } }).end();
        }).catch((err) => res.sendStatus(500).end());
    }
    // register - POST
    // expects email and password fields to be set in the body of the post request
    // sends a success message to caller on success, or a failure status code on failure
    register(req, res, next) {
        const user = new userModel_1.UserModel(req.body.email, req.body.password);
        SecurityController.db.getOneRecord(SecurityController.usersTable, { email: req.body.email })
            .then((userRecord) => {
            if (userRecord) {
                return res.status(400).send({ fn: "register", status: "failure", data: "User Exits" }).end();
            }
            SecurityController.db.addRecord(SecurityController.usersTable, user.toObject()).then((result) => res.send({ fn: "register", status: "success" }).end())
                .catch((reason) => res.sendStatus(500).end());
        }).catch((reason) => res.sendStatus(500).end());
    }
    // authorize - GET
    // this code actually does nothing, but if it is secured at the route level, it will return the email address for the token that
    // was returned.  This is used to verify a token by a client application
    // returns the users email on success
    authorize(req, res, next) {
        // validate that req.authUser exists, if so, return the user's email address.
        console.log();
        res.send({ fn: "authorize", status: "success", data: { email: req.body.authUser.email } }).end();
    }
    // changePwd - POST
    // chages the password of the user represented in the token.  Expects password in the body of the POST
    // returns a success messager to the client on success, a failure status code on failure
    changePwd(req, res, next) {
        if (!req.body.password) {
            res.status(400).send({ fn: "changePwd", status: "failure" }).end();
        }
        const user = new userModel_1.UserModel(req.body.authUser.email, req.body.password);
        SecurityController.db.updateRecord(SecurityController.usersTable, { email: user.email }, { $set: { password: user.password } }).then((result) => {
            if (result) {
                res.send({ fn: "changePwd", status: "success" }).end();
            }
            else {
                res.status(400).send({ fn: "changePwd", status: "failure" }).end();
            }
        }).catch((err) => res.send({ fn: "changePwd", status: "failure", data: err }).end());
    }
}
exports.SecurityController = SecurityController;
SecurityController.db = new MongoDB_1.Database(config_1.Config.url, "security");
SecurityController.usersTable = "users";
//# sourceMappingURL=securityController.js.map