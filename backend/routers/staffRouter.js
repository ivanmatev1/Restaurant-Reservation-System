import express from "express"
import { getStaff, getStaffByID, insertStaff, updateStaff, deleteStaffByID, getReservations, getPendingReservations, getReservationByID, updateReservationStatus, insertTable, getTables} from "../controllers/staffController.js"


const router = express.Router()
router.use(express.json())

router.get("/", async (req, res) => {
    const users = await getStaff()
    res.status(200).send(users)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const user = await getStaffByID(id)
    if (!user)
        return res.status(404).send({ message: "Cannot find user!" })
    res.status(200).send(user)
})

router.post("/", async (req, res) => {
    const { name, years_experience } = req.body
    const user = await insertStaff(name, years_experience)
    res.status(200).send(user)
})

router.put("/id/:id", async (req, res) => {
    const id = req.params.id
    const { name, years_experience } = req.body
    if (!await getStaffByID(id))
        return res.status(404).send({ message: "Cannot find user!" })
    const result = await updateStaff(id, name, years_experience)
    res.status(200).send(result)
})

router.delete("/id/:id", async (req, res) => {
    const id = req.params.id
    if (!await getStaffByID(id))
        return res.status(404).send({ message: "Cannot find user!" })
    const result = await deleteStaffByID(id)
    res.status(200).send(result)
})

router.get("/reservations", async (req, res) => {
    const users = await getReservations()
    res.status(200).send(users)
})

router.get("/reservations/pending", async (req, res) => {
    const users = await getPendingReservations()
    res.status(200).send(users)
})

router.get("/reservations/id/:id", async (req, res) => {
    const id = req.params.id
    const user = await getReservationByID(id)
    if (!user)
        return res.status(404).send({ message: "Cannot find reservation!" })
    res.status(200).send(user)
})

router.put("/reservations/id/:id", async (req, res) => {
    const id = req.params.id
    const { status } = req.body
    if (!await getReservationByID(id))
        return res.status(404).send({ message: "Cannot find reservation!" })
    const result = await updateReservationStatus(id, status)
    res.status(200).send(result)
})

router.post("/tables", async (req, res) => {
    const user = await insertTable()
    res.status(200).send(user)
})

router.get("/tables", async (req, res) => {
    const users = await getTables()
    res.status(200).send(users)
})

export default router