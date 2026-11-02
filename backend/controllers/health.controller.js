
import pool from "../config/db.js";

export const checkHealth = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT NOW() AS current_time"
        );

        res.status(200).json({
            message: "TaskFlow API and database connected!",
            databaseTime: result.rows[0].current_time
        });

    } catch (error) {
        console.error("Database connection failed:", error.message);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
};
