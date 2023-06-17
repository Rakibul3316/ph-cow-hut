import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser, UserModel>("user", userSchema, "user");
