import express from "express"
import customerRouter from "./routers/customerRouter.js"
import staffRouter from "./routers/staffRouter.js"

const app = express()
app.use(express.json())

app.use("/customers", customerRouter)
app.use("/staff", staffRouter)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong")
})

app.listen(3050, () =>{
    console.log("prosto neshto")
})