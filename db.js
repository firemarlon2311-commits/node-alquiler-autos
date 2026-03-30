import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Neon usa esto
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;