import express from "express"
import { getCustomers, getCostumerByID, insertCustomer, updateCustomer, deleteCustomerByID, getFreeTables, makeReservation, getReservationsByCutomerID } from "../controllers/customerController.js"


const router = express.Router()
router.use(express.json())

router.get("/", async (req, res) => {
    const users = await getCustomers()
    res.status(200).send(users)
})

router.get("/id/:id", async (req, res) => {
    const id = req.params.id
    const user = await getCostumerByID(id)
    if (!user)
        return res.status(404).send({ message: "Cannot find user!" })
    res.status(200).send(user)
})

router.post("/", async (req, res) => {
    const { name, phone } = req.body
    const user = await insertCustomer(name, phone)
    res.status(200).send(user)
})

router.put("/id/:id", async (req, res) => {
    const id = req.params.id
    const { name, phone } = req.body
    if (!await getCostumerByID(id))
        return res.status(404).send({ message: "Cannot find user!" })
    const result = await updateCustomer(id, name, phone)
    res.status(200).send(result)
})

router.delete("/id/:id", async (req, res) => {
    const id = req.params.id
    if (!await getCostumerByID(id))
        return res.status(404).send({ message: "Cannot find user!" })
    const result = await deleteCustomerByID(id)
    res.status(200).send(result)
})

router.get("/tables", async (req, res) => {
    const users = await getFreeTables()
    res.status(200).send(users)
})

router.post("/reservations", async (req, res) => {
    const { guest_number, customer_id, table_id } = req.body
    const user = await makeReservation(guest_number, customer_id, table_id)
    res.status(200).send(user)
})

router.get("/reservations/:id", async (req, res) => {
    const id = req.params.id
    const user = await getReservationsByCutomerID(id)
    if (!user)
        return res.status(404).send({ message: "Cannot find user!" })
    res.status(200).send(user)
})

export default router