import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IAuthUser } from "./auth.interface";
import { AuthServices } from "./auth.service";

const userSignup = catchAsync(async (req: Request, res: Response) => {
  const { ...authData } = req.body;
  const result = await AuthServices.signupUserFromDB(authData);

  sendResponse<IAuthUser>(res, {
    statusCode: result === "success" ? httpStatus.OK : httpStatus.UNAUTHORIZED,
    success: result === "success" ? true : false,
    meta: null,
    message: result === "success" ? "Signup successful" : "Signup failed",
    data: null,
  });
});

export const AuthControllers = {
  userSignup,
};
