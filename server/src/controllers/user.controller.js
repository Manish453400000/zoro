import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { cloudinaryUpload } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (e) {
        throw new ApiError(500, "Something went wrong while generating tokens");
    }
};

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

    // generate acccess token and refresh token
    const { accessToken, refreshToken } = await generateTokens(user._id);

    //remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    //check for user creation
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
    };

    //return res
    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                201,
                {
                    user: createdUser,
                    accessToken,
                    refreshToken,
                },
                "Registration successful"
            )
        );
});

const loginUser = asyncHandler(async (req, res) => {
    //get login details
    const { email, password } = req.body;

    if (!email && !password) {
        throw new ApiError(400, "Email & Password is required");
    }
    //find user from database
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new ApiError(400, "User dose not exist");
    }
    //cheack password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Incorrect password");
    }
    //access and refresh token
    const { accessToken, refreshToken } = await generateTokens(user._id);

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    //send cookie
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: "None",
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken,
                },
                "User logged in successfully",
                true
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    //find the user
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out", true));
});

const refreshAcccessToken = asyncHandler(async (req, res) => {
    // get refreshToken from user
    const incomingRefreshToken =
        req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }
    //cheacking refresh token
    const decodedToken = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
    );

    //Find user by decoded id
    const user = await User.findById(decodedToken?._id);
    if (!user) {
        throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(401, "Refresh token expired");
    }

    const options = {
        httpOnly: true,
        secure: true,
    };
    const { accessToken, newRefreshToken } = await generateTokens(user._id);

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                { accessToken, newRefreshToken },
                "Access Token Refreshed"
            )
        );
});

const editAvatar = asyncHandler(async (req, res) => {
    // verify jwt by middleware
    // cheack for avatar
    const avatarOnLocalPath = req.file?.path;
    if (!avatarOnLocalPath) {
        throw new ApiError(401, "Avatar is required");
    }
    // updload avatar on cloudinary
    const avatar = await cloudinaryUpload(avatarOnLocalPath);
    if (!avatar.url) {
        throw new ApiError(500, "Something went wrong while uploading avatar");
    }
    // update user data
    const updatedUser = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url,
            },
        },
        { new: true }
    ).select("-password");
    if (!updatedUser) {
        throw new ApiError(500, "Somthing went wrong while updating user");
    }
    // send updated user data to frontend
    return res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "Avatar successfully updated"));
});

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid password");
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password updated successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                user: user,
            },
            "Current user fetched successfully"
        )
    );
});

const updateUser = asyncHandler(async (req, res) => {});

export {
    createUser,
    loginUser,
    editAvatar,
    logoutUser,
    getCurrentUser,
    changePassword,
    refreshAcccessToken,
};
