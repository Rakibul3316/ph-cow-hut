"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const user_model_1 = require("../user/user.model");
const signupUserFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findOne({ phoneNumber: payload.phoneNumber });
    if (userExist) {
        if (userExist.password == payload.password) {
            return "success";
        }
        else {
            return "failed";
        }
    }
    else {
        return "failed";
    }
});
exports.AuthServices = {
    signupUserFromDB,
};
