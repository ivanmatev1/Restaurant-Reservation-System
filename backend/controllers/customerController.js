import pool from "../database/database.js"

// Za  cutomer kato cqlo
export async function getCustomers() {
    const [result] = await pool.query("SELECT * FROM Customer")
    return result
}

export async function getCostumerByID(id) {
    const [result] = await pool.query('SELECT * FROM Customer WHERE id = ?', [id])
    return result[0]
}

export async function insertCustomer(name, phone) {
    const result = await pool.query("INSERT INTO Customer (name, phone) VALUES (?, ?)", [name, phone])
    return result
}

export async function updateCustomer(id, name, phone) {
    const result = await pool.query("UPDATE Customer SET name = ?, phone = ? WHERE id = ?", [name, phone, id])
    return result
}

export async function deleteCustomerByID(id) {
    const result = await pool.query("DELETE FROM Customer WHERE id = ?", [id])
    return result
}


// Funkcii izpulnqvani ot cutomer
export async function getFreeTables() {
    const [result] = await pool.query("SELECT * FROM RestaurantTable WHERE status = 'Free'")
    return result
}

export async function makeReservation(guest_number, customer_id, table_id) {
    const result1 = await pool.query("INSERT INTO Reservation (status, guest_number, customer_id, table_id) VALUES ('Pending',?, ?, ?)", [guest_number, customer_id, table_id])
    const result2 = await pool.query("UPDATE RestaurantTable SET status = 'Reserved'WHERE id = ?", [table_id])
    return result1, result2
}

export async function getReservationsByCutomerID(id) {
    const [result] = await pool.query("SELECT * FROM Reservation WHERE customer_id = ?", [id])
    return result
}