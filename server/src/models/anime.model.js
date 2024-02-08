import mongoose, { Schema } from "mongoose";

const animeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String, // cloudnery url
            required: true,
        },
        airIn: {
            type: String,
            enum: ["TV", "WEB"],
            default: "TV",
        },
        country: {
            type: String,
            required: true,
        },
        dateAired: {
            type: String,
            required: true,
        },
        scores: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        premiered: {
            type: String,
            required: true,
        },
        genres: {
            type: [String],
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        episodes: {
            type: String,
            required: true,
        },
        studio: {
            type: String,
            required: true,
        },
        producers: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const episodeSchema = new Schema(
    {
        animeName: {
            type: String,
            required: true,
        },
        seasonNumber: {
            type: Number,
            required: true,
        },
        title: String,
        url: {
            sub: [
                {
                    server: String,
                    url: String,
                },
            ],
            dub: [
                {
                    server: String,
                    url: String,
                },
            ],
        },
    },
    { timestamps: true }
);

export const Anime = mongoose.model("Anime", animeSchema);
