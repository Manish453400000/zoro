import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { cloudinaryUpload } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createUser = asyncHandler(async (req, res) => {
    //get user details
    const { username, email, password } = req.body;
    //validation
    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
    //check if user already exists
    const existedUser = await User.findOne({
        $or: [{ email }],
    });
    if (existedUser) {
        throw new ApiError(400, "Email already exists");
    }
    //create entry in db
    const user = await User.create({
        username: username,
        email: email,
        password: password,
    });

    //remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    //check for user creation
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }

    //return res
    return res
        .status(201)
        .json(new ApiResponse(201, createdUser, "Registration successful"));
});

const findUser = asyncHandler(async (req, res) => {
    const user = await User.find({ email: req.query.email });
    if (!user[0]) {
        res.status(404).json({
            success: false,
            response: "User not found",
        });
        return;
    }
    if (user[0].password === req.query.password) {
        res.status(200).json({
            success: true,
            response: {
                id: user[0]._id,
                username: user[0].username,
                email: user[0].email,
            },
        });
    } else {
        res.status(404).json({
            success: false,
            response: "Wrong Password",
        });
    }
});

export { createUser, findUser };
