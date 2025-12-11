export interface Person {
    id: number;
    name: string;
    jobTitle: string;
    department: string;
    managerId: number | null;
    photoPath: string | null;
    type: "Employee" | "Partner";
    status: "Active" | "Inactive";
}