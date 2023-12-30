import { Router } from "express";
import {
    createUser,
    loginUser,
    editUser,
    logoutUser,
    refreshAcccessToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(loginUser);

//Secured routes
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/refresh-token").post(refreshAcccessToken);
userRouter
    .route("/edit")
    .post(upload.fields([{ name: "avatar", maxCount: 1 }]), editUser);

export { userRouter };
