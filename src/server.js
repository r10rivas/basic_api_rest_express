import express, { json } from 'express';
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from "./routes/task.routes";


// Up server
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(json());

// Routes
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;
