import express from "express"
import cors from "cors"
import services from "./services/index.js"


const server = express()
server.use(express.json())
server.use(cors())


const PORT = process.env.PORT

server.use("/", services)

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

server.on("error", (error) => console.log(`Server failed: ${error}`));