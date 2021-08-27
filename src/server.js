import express from "express"
import cors from "cors"


const server = express()
server.use(express.json())
server.use(cors())


const PORT = process.env.PORT


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

server.on("error", (error) => console.log(`Server failed: ${error}`));