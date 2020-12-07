export class FavoriteModel {

    // does not encrypt password, expects already encrypted password
    public static fromObject = (obj: any): FavoriteModel => {
        const mdl = new FavoriteModel(obj.email, obj.title);
        return mdl;
    }
    public id ?= "";
    public email = "";
    public title = "";

    public constructor(email: string, title: string) {
        this.email = email;
        this.title = title;
    }

    public toObject = (): any => ({ email: this.email, title: this.title });
}
