import  { employeeController }  from "../controller/employeeController";
import { Router } from "express";

const router = Router();

router.get("/", employeeController.getAll);

export default router;

