import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            unique: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        avatar: {
            type: String, // Cloudinary url
            default:
                "http://res.cloudinary.com/dwl9iesij/image/upload/v1703841893/cegzmjvgus1rghjfnhwf.jpg",
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Anime",
            },
        ],
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};
userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const User = mongoose.model("User", userSchema);
