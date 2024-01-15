import { Router } from "express";
import {
    createUser,
    loginUser,
    editAvatar,
    logoutUser,
    refreshAcccessToken,
    changePassword,
    getCurrentUser,
    createAdmin,
    loginAdmin,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(loginUser);

//Secured routes
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/get-user").post(verifyJwt, getCurrentUser);
userRouter.route("/refresh-token").post(refreshAcccessToken);
userRouter.route("/change-password").post(verifyJwt, changePassword);
userRouter.route("/edit/avatar").post(
    upload.single("avatar"),
    // upload.fields([{ name: "avatar", maxCount: 1 }]),
    verifyJwt,
    editAvatar
);

//admin only
userRouter.route("/admin/register", createAdmin);
userRouter.route("/admin/login", loginAdmin);

export { userRouter };
