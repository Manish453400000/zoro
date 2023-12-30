import { Router } from "express";
import {
    createUser,
    loginUser,
    editAvatar,
    logoutUser,
    refreshAcccessToken,
    changePassword,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(loginUser);

//Secured routes
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/refresh-token").post(refreshAcccessToken);
userRouter.route("/change-password").post(verifyJwt, changePassword);
userRouter.route("/edit/avatar").post(
    upload.single("avatar"),
    // upload.fields([{ name: "avatar", maxCount: 1 }]),
    verifyJwt,
    editAvatar
);

export { userRouter };
