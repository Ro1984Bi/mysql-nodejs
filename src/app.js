import express from "express";
import indexRoute from "./routes/index.route.js";
import employeesRoutes from "./routes/employee.route.js";


const app = express();

app.use(express.json());


app.use( '/api',  employeesRoutes);
app.use(indexRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
}) 

export default app;