import { Router } from "express";
import { ensureAuthentication } from "../middlewares/auth.validation.middleware.js";
import { createRepost } from "../controllers/repost.controllers.js";
const repostRouter = Router();
import repostCheck from "../middlewares/repost.middleware.js";
import checkPostExistence from "../middlewares/check.post.existence.middleware.js";

repostRouter.post("/repost/:postId", ensureAuthentication, checkPostExistence, repostCheck, createRepost);

export default repostRouter;