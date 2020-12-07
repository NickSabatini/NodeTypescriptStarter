"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteModel {
    constructor(email, id) {
        this.id2 = "";
        this.email = "";
        this.id = "";
        this.toObject = () => ({ email: this.email, id: this.id });
        this.email = email;
        this.id = id;
    }
}
exports.FavoriteModel = FavoriteModel;
// does not encrypt password, expects already encrypted password
FavoriteModel.fromObject = (obj) => {
    const mdl = new FavoriteModel(obj.email, obj.id);
    return mdl;
};
//# sourceMappingURL=favoritesModel.js.map