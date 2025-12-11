import  { employeeController }  from "../controller/employeeController";
import { Router } from "express";

const router = Router();

router.get("/employees", employeeController.getAll);

export default router;

