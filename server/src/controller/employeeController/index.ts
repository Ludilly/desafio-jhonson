import { Request, Response } from "express";
import { employeeService } from "../../services/employeeService";
import { statusResponse } from "../../utils/statusCode";

export const employeeController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const employees = await employeeService.getAllEmployees();
      res.json(employees);
    } catch (err) {
      console.error(err);
      res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ error: "Erro ao buscar funcionários" });
    }
  },
};
