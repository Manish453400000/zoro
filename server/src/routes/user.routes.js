import { Router } from "express";
import { createUser, findUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").get(findUser);

export { userRouter };
