import { Anime } from "../models/anime.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { cloudinaryUpload } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const saveAnime = asyncHandler(async (req, res) => {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
});

export { saveAnime };
