import { User } from "../user/user.model";
import { IAuthUser } from "./auth.interface";

const signupUserFromDB = async (payload: IAuthUser): Promise<string> => {
  const userExist = await User.findOne({ phoneNumber: payload.phoneNumber });

  if (userExist) {
    if (userExist.password == payload.password) {
      return "success";
    } else {
      return "failed";
    }
  } else {
    return "failed";
  }
};

export const AuthServices = {
  signupUserFromDB,
};
