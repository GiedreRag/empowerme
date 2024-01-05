import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from './env.js';

const database_reset = false;

async function dbSetup() {
    let connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
    });

    if (database_reset) {
        await connection.execute(`DROP DATABASE IF EXISTS \`${DB_DATABASE}\``);
    }

    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${DB_DATABASE}\``);
    connection.query(`USE \`${DB_DATABASE}\``);

    if (database_reset) {
        await formSubmissionsTable(connection);
    }
    
    return connection;
}

async function formSubmissionsTable(db) {
    try {
        const sql = `CREATE TABLE \`form-submissions\` (
                        id int(100) NOT NULL AUTO_INCREMENT,
                        name varchar(60) NOT NULL,
                        email varchar(100) NOT NULL,
                        message text NOT NULL,
                        createdAt timestamp NOT NULL DEFAULT current_timestamp(),
                        PRIMARY KEY (id)
                    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci`;
        await db.execute(sql);      
    } catch (error) {
        console.log("Couldn't create form submissions table.");
        console.log(error);
        throw error;
    }
}

export const connection = await dbSetup();