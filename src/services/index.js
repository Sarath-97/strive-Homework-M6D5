import {Router} from "express"

import productsRoutes from "./products/handlers.js"
import reviewsRoutes from "./reviews/handlers.js"

const route = Router()

route.use("/products",productsRoutes )
route.use("/review",reviewsRoutes)

export default route