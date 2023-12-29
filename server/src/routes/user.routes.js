import { Router } from "express";
import {
    createUser,
    loginUser,
    editUser,
    logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(loginUser);
userRouter
    .route("/edit")
    .post(upload.fields([{ name: "avatar", maxCount: 1 }]), editUser);

userRouter.route("/logout").post(verifyJwt, logoutUser);

export { userRouter };
