"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
        },
    },
    address: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
        enum: ["seller", "buyer"],
    },
    budget: {
        type: Number,
        require: true,
    },
    income: {
        type: Number,
        require: true,
    },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("user", userSchema, "user");
