import { Person } from "../types";
import { api } from "./api";

export const peopleService = {
  getAll: async (): Promise<Person[]> => {
    const res = await api.get("/employees");
    return res.data;
  },
};
