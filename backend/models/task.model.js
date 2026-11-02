
import pool from "../config/db.js";

export const getAllTasks = async () => {
    const result = await pool.query(`
        SELECT
            t.id,
            t.title,
            t.description,
            t.status,
            t.priority,
            t.due_date,
            p.name AS project_name,
            u.full_name AS assigned_to
        FROM tasks t
        JOIN projects p ON t.project_id = p.id
        LEFT JOIN users u ON t.assigned_to = u.id
        ORDER BY t.created_at DESC
    `);

    return result.rows;
};
