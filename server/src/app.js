import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(cors({
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

// routes

app.use("/api/auth",(req,res,next)=>{
    console.log("Accessed at:",req.url)
    next()
},authRoutes)

app.get("/",(req, res)=>{
    res.send("API Running")
})

export default app