import { Router } from "express";
import { UrlController } from "./controllers/UrlController";
import { UserController } from "./controllers/UserController";

const router = Router();

router.post("/user", new UserController().create);
router.get("/", new UserController().allUsers);

router.post("/user/url", new UrlController().create);
router.post("/user/shorturl", new UrlController().findUrlShort);
router.get("/shorturl/:id", new UrlController().getUrl);

export { router };
