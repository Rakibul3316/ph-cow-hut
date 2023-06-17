import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router();

router.post("/create", UserControllers.createUser);

router.patch("/:id", UserControllers.updateUser);

router.get("/:id", UserControllers.getSingleUser);

router.delete("/:id", UserControllers.deleteUser);

router.get("/", UserControllers.getAllUsers);

export const UserRoutes = router;
