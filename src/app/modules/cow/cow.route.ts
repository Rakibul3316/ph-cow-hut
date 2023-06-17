import express from "express";
import { CowControllers } from "./cow.controller";
const router = express.Router();

router.post("/create", CowControllers.createCow);

router.patch("/:id", CowControllers.updateCow);

router.get("/:id", CowControllers.getSingleCow);

router.delete("/:id", CowControllers.deleteCow);

router.get("/", CowControllers.getAllCows);

export const CowRoutes = router;
