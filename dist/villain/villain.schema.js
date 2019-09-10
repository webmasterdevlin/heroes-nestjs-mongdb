"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.VillainSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    house: { type: String, required: true },
    knownAs: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=villain.schema.js.map