import { Router } from "express";
import * as handlers from "./handlers.js";

const route = Router();

route.get("/", handlers.list);

route.post("/:product_id", handlers.create);

export default route;
