import {Router} from "express"

import productsRoutes from "./products/routes.js"
// import reviewsRoutes from "./reviews/handlers.js"

const route = Router()

route.use("/products",productsRoutes )


export default route