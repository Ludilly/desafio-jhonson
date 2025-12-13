import  { employeeController }  from "../controller/employeeController";
import { Router } from "express";
import { healthcheck } from "../controller/healthcheck";

const router = Router();

router.get("/employees", employeeController.getAll);
router.post('/healthcheck', healthcheck);

export default router;

