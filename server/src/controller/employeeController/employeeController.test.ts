import { Request, Response } from "express";
import { employeeService } from "../../services/employeeService";
import { employeeController } from ".";

jest.mock("../../services/employeeService", () => ({
  employeeService: {
    getAllEmployees: jest.fn(),
  },
}));

describe("employeeController.getAll", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    jsonMock = jest.fn().mockReturnValue(undefined);
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    mockRequest = {};
    mockResponse = {
      json: jsonMock,
      status: statusMock,
    };
  });

  it("should return all employees with status 200", async () => {
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

    (employeeService.getAllEmployees as jest.Mock).mockResolvedValue(
      mockEmployees
    );

    await employeeController.getAll(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(employeeService.getAllEmployees).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledWith(mockEmployees);
    expect(statusMock).not.toHaveBeenCalled();
  });

  it("should return empty array when no employees exist", async () => {
    (employeeService.getAllEmployees as jest.Mock).mockResolvedValue([]);

    await employeeController.getAll(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(employeeService.getAllEmployees).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledWith([]);
  });

  it("should return 500 error when service throws exception", async () => {
    const error = new Error("Database connection failed");
    (employeeService.getAllEmployees as jest.Mock).mockRejectedValue(error);

    await employeeController.getAll(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(employeeService.getAllEmployees).toHaveBeenCalledTimes(1);
    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      error: "Erro ao buscar funcionários",
    });
  });

  it("should log error to console when service fails", async () => {
    const error = new Error("Database error");
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (employeeService.getAllEmployees as jest.Mock).mockRejectedValue(error);

    await employeeController.getAll(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(error);
    consoleErrorSpy.mockRestore();
  });
});