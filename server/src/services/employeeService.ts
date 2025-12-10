import { employeeModel } from "../models/employeeModel";

export const employeeService = {
  getAllEmployees: async () => {
    const data = await employeeModel.getAll();

    return data;
  },
};
