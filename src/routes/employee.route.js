import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);


router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;
