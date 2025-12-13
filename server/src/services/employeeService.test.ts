import { employeeService } from "./employeeService";
import { employeeModel } from "../models/employeeModel";

jest.mock("../models/employeeModel", () => ({
  employeeModel: {
    getAll: jest.fn(),
  },
}));

describe("employeeService.getAllEmployees", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return all employees from model", async () => {
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

    (employeeModel.getAll as jest.Mock).mockResolvedValue(mockEmployees);

    const result = await employeeService.getAllEmployees();

    expect(employeeModel.getAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockEmployees);
  });

  it("should return empty array when no employees exist", async () => {
    (employeeModel.getAll as jest.Mock).mockResolvedValue([]);

    const result = await employeeService.getAllEmployees();

    expect(employeeModel.getAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });

  it("should propagate error from model", async () => {
    const error = new Error("Database connection failed");
    (employeeModel.getAll as jest.Mock).mockRejectedValue(error);

    await expect(employeeService.getAllEmployees()).rejects.toThrow(
      "Database connection failed"
    );

    expect(employeeModel.getAll).toHaveBeenCalledTimes(1);
  });

  it("should call getAll method only once", async () => {
    (employeeModel.getAll as jest.Mock).mockResolvedValue([]);

    await employeeService.getAllEmployees();

    expect(employeeModel.getAll).toHaveBeenCalledTimes(1);
  });

  it("should return exact data from model without modification", async () => {
    const mockData = [
      {
        id: 1,
        name: "Test User",
        jobTitle: "Developer",
        department: "Engineering",
        managerId: 2,
        photoPath: "/photos/test",
        type: "Employee",
        status: "Active",
      },
    ];

    (employeeModel.getAll as jest.Mock).mockResolvedValue(mockData);

    const result = await employeeService.getAllEmployees();

    expect(result).toBe(mockData);
    expect(result).not.toEqual([]);
  });
});