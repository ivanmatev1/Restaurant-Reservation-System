import pool from "../database/database.js"

// Za  staff kato cqlo
export async function getStaff() {
    const [result] = await pool.query("SELECT * FROM Staff")
    return result
}

export async function getStaffByID(id) {
    const [result] = await pool.query('SELECT * FROM Staff WHERE id = ?', [id])
    return result[0]
}

export async function insertStaff(name, years_experience) {
    const result = await pool.query("INSERT INTO Customer (name, years_experience) VALUES (?, ?)", [name, years_experience])
    return result
}

export async function updateStaff(id, name, years_experience) {
    const result = await pool.query("UPDATE Customer SET name = ?, years_experience = ? WHERE id = ?", [name, years_experience, id])
    return result
}

export async function deleteStaffByID(id) {
    const result = await pool.query("DELETE FROM Customer WHERE id = ?", [id])
    return result
}


// Funkcii izpulnqvani ot staff
export async function getReservations() {
    const [result] = await pool.query("SELECT * FROM Reservation")
    return result
}

export async function getPendingReservations() {
    const [result] = await pool.query("SELECT * FROM Reservation WHERE status = 'Pending'")
    return result
}

export async function getReservationByID(id) {
    const [result] = await pool.query('SELECT * FROM Reservation WHERE id = ?', [id])
    return result[0]
}

export async function updateReservationStatus(id, status) {
    const result1 = await pool.query("UPDATE Reservation SET status = ? WHERE id = ?", [status, id])
    if(status == "Rejected"){
        const result2 = await pool.query("UPDATE RestaurantTable SET status = 'Free' WHERE id = (SELECT table_id FROM Reservation WHERE id = ?)", [id])
        return result1, result2
    }
    return result1
}

export async function insertTable() {
    const result = await pool.query("INSERT INTO RestaurantTable (status) VALUES ('Free')")
    return result
}

export async function getTables() {
    const [result] = await pool.query("SELECT * FROM RestaurantTable")
    return result
}
