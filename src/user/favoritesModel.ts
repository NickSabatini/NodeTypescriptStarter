export class FavoriteModel {

    // does not encrypt password, expects already encrypted password
    public static fromObject = (obj: any): FavoriteModel => {
        const mdl = new FavoriteModel(obj.email, obj.id);
        return mdl;
    }
    public id2 ?= "";
    public email = "";
    public id = "";

    public constructor(email: string, id: string) {
        this.email = email;
        this.id = id;
    }

    public toObject = (): any => ({ email: this.email, id: this.id });
}
