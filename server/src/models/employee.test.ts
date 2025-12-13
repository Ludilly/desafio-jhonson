import { employeeModel } from "./employeeModel";
import { db } from "../database";

jest.mock("../database", () => ({
  db: {
    query: jest.fn(),
  },
}));

describe("employeeModel.getAll", () => {
  it("should return all employees from database", async () => {
    const mockEmployees = [
      {
        id: 1,
        name: "Eleven Silva",
        jobTitle: "CEO",
        department: "Executive",
        managerId: null,
        photoPath: "/photos/eleven",
        type: "Employee",
        status: "Active",
      },
      {
        id: 2,
        name: "Joao das Neves",
        jobTitle: "Operations Manager",
        department: "Operations",
        managerId: 1,
        photoPath: "/photos/jon",
        type: "Employee",
        status: "Active",
      },
    ];

    (db.query as jest.Mock).mockResolvedValue([mockEmployees]);

    const result = await employeeModel.getAll();

    expect(db.query).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockEmployees);
  });
});