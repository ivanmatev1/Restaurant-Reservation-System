import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config({});

// .env fila ne e commitnat po ochevidni prichini
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, //localhost
    user: process.env.MYSQL_USER, //root
    password: process.env.MYSQL_PASSWORD, //nqma da go leakvam
    database: process.env.MYSQL_DATABASE //restaurant
}).promise()



export default pool