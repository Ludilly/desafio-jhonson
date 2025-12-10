import { db } from "../database";

export const employeeModel = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT
        p.id,
        p.nome AS name,
        p.job_title AS jobTitle,
        p.department,
        p.gestor_id AS managerId,
        p.photo_path AS photoPath,
        p.type,
        p.status
      FROM pessoas p
      ORDER BY p.id;
    `);

    return rows;
  },
};
