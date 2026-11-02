
import { getAllTasks } from "../models/task.model.js";

export const fetchAllTasks = async () => {
    const tasks = await getAllTasks();

    return tasks;
};
