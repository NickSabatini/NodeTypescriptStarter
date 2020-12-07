"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteModel {
    constructor(email, title) {
        this.id = "";
        this.email = "";
        this.title = "";
        this.toObject = () => ({ email: this.email, title: this.title });
        this.email = email;
        this.title = title;
    }
}
exports.FavoriteModel = FavoriteModel;
// does not encrypt password, expects already encrypted password
FavoriteModel.fromObject = (obj) => {
    const mdl = new FavoriteModel(obj.email, obj.title);
    return mdl;
};
//# sourceMappingURL=favoritesModel.js.map