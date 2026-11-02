
import { fetchAllTasks } from "../services/task.service.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await fetchAllTasks();

        res.status(200).json(tasks);

    } catch (error) {
        console.error("Failed to fetch tasks:", error.message);

        res.status(500).json({
            message: "Could not retrieve tasks"
        });
    }
};
