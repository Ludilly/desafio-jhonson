import { db } from "../database";

export const employeeModel = {
  getAll: async () => {
    const [rows] = await db.query(`
       SELECT
        p.id,
        p.name,
        p.jobTitle,
        p.department,
        p.managerId,
        p.photoPath,
        p.type,
        p.status
      FROM pessoas p
    `);

    return rows;
  },
};

