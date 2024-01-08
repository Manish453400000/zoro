import { Router } from "express";
import { saveAnime } from "../controllers/anime.controller.js";

const animeRouter = Router();

animeRouter.route("/all-info").get(saveAnime);

export { animeRouter };
