
const mysql = require("mysql2");

let db = {}
// create e connection
db.createConnection = async () => {
    return new Promise((resolve, reject) => {
        try {
            const mysqlConnection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                dateStrings: true
            })
            mysqlConnection.connect(async function (err) {
                if (err) {
                    reject(new Error(err.message))
                }
                resolve(mysqlConnection)
            })
        } catch (error) {
            reject(new Error(error.message))
        }
    })
}

// Queries for select, insert, update, replace, delete
db.query = async (sqlQuery, params, type, conn) => {
    return new Promise((resolve, reject) => {
        try {
            conn.query(sqlQuery, params, async (err, result) => {
                if (!err) {
                    switch (type) {
                        case 'select':
                            resolve(JSON.parse(JSON.stringify(result)))
                            break
                        case 'insert':
                            resolve(parseInt(result.insertId))
                            break
                        case 'update':
                        case 'replace':
                        case 'delete':
                            if (result.affectedRows > 0) {
                                resolve(true)
                            }
                            else {
                                resolve(false)
                            }
                            break
                        default:
                            throw new Error('Query type not match')
                    }
                }
                else {
                    console.log('Query or database error:', err)
                    reject(new Error(err.message))
                }
            })
        } catch (error) {
            reject(new Error(error.message))
        }
    })
}


module.exports = db;