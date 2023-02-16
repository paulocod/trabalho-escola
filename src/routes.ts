import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { UrlController } from "./controllers/UrlController";

const router = Router();

router.post("/user", new UserController().create);
router.get("/", new UserController().allUsers);

router.post("/user/url", new UrlController().create);
router.post("/user/shorturl", new UrlController().findUrlShort);

export { router };
