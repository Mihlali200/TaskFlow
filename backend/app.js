
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());
// my routes 
app.use("/api/health", healthRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TaskFlow API!",
        status: "Server is running"
    });
});

export default app;
