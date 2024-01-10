import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const episodeSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    url: {
        sub: {
            type: String, //cloudinary url
            required: true,
        },
        dub: {
            type: String, //cloudinary url
        },
    },
    duration: {
        type: String, //cloudinary duration
        required: true,
    },
    intro: {
        start: String,
        end: String,
    },
});

const animeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "anime name is required"],
        },
        description: {
            type: String,
            required: [true, "anime description is required"],
        },
        thumbnail: {
            type: String,
            default:
                "http://res.cloudinary.com/dwl9iesij/image/upload/v1704559882/w59naybq3jlw7jd3djyp.jpg",
        }, //cloudinary url
        episodes: [episodeSchema],
        type: String,
        aired: String,
        status: String,
        genres: [String],
        country: String,
        studio: String,
        keywords: [String],
    },
    { timestamps: true }
);

animeSchema.plugin(mongooseAggregatePaginate);

export const Anime = mongoose.model("Anime", animeSchema);
