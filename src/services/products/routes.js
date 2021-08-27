import {Router} from "express"
import * as handlers  from "./handlers.js"


const route = Router()

route.get("/",handlers.list)

export default route