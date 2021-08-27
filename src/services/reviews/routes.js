import {Router} from "router"
import productsHandlers from "./handlers.js"

const route = Router()

route.get("/",productsHandlers.list)

export default route