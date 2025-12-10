import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const employees = await employeeService.getAllEmployees();
      res.json(employees);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar funcionários" });
    }
  },
};
