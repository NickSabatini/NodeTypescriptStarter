"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// configuration information
exports.Config = {
    secret: process.env.SECRET || "some-secret-goes-here",
    serverport: process.env.PORT || 3000,
    tokenLife: 1800,
    url: process.env.MONGOURL || "mongodb+srv://CISC474:CISC474Password@cluster0.87h5e.mongodb.net/test?authSource=admin&replicaSet=atlas-e13kse-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
};
//# sourceMappingURL=config.js.map