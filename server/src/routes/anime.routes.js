import { Router } from "express";
import { saveAnime, getAllAnime } from "../controllers/anime.controller.js";

const animeRouter = Router();

animeRouter.route("/all-info").get(saveAnime);
animeRouter.route("/get-animes").get(getAllAnime);

export { animeRouter };
