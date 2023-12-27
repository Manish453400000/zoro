import { Router } from "express";
import { createUser, findUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(findUser);

export { userRouter };
