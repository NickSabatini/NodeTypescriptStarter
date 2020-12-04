"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
// represents a user in the system
class UserModel {
    // encrypts password
    constructor(email, password) {
        this.id = "";
        this.email = "";
        this.password2 = "";
        // includes encrypted password
        this.toObject = () => ({ email: this.email, password: this.password });
        this.email = email;
        this.password = password;
    }
    // when user password is set through here, it is stored encrypted
    set password(val) {
        this.password2 = UserModel.encryptString(val);
    }
    // returns encrypted password
    get password() { return this.password2; }
    // encrypt a string using the bcrypt library
    static encryptString(inval) {
        try {
            const salt = bcrypt_1.default.genSaltSync(10);
            return bcrypt_1.default.hashSync(inval, salt);
        }
        catch (err) {
            return "*";
        }
    }
    // compares unencrypted password to encrypted password
    validatePassword(password) {
        if (this.password === "*") {
            return false;
        }
        return bcrypt_1.default.compareSync(password, this.password);
    }
}
exports.UserModel = UserModel;
// does not encrypt password, expects already encrypted password
UserModel.fromObject = (obj) => {
    const mdl = new UserModel(obj.email, "");
    mdl.password2 = obj.password;
    return mdl;
};
//# sourceMappingURL=userModel.js.map