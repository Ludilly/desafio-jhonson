"use client";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import OrgTree from "./components/OrgTree";
import { peopleService } from "./service/peopleService";
import { Person } from "./types";
import Header from "./components/Header";
import { Box, CircularProgress } from "@mui/material";

export default function HierarchyPage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    peopleService.getAll()
      .then(setPeople)
      .finally(() => setLoading(false));
  }, []);

  let filteredPeople = people.filter((p) => {
    if (department && p.department !== department) return false;
    if (manager && String(p.managerId) !== manager) return false;
    if (type && p.type !== type) return false;
    if (status && p.status !== status) return false;
    return true;
  });

  if (manager) {
    const managerIdNum = Number(manager);
    const managerPerson = people.find((p) => p.id === managerIdNum);
    if (managerPerson) {
      const alreadyIncluded = filteredPeople.some((p) => p.id === managerIdNum);
      if (!alreadyIncluded) {
        filteredPeople = [managerPerson, ...filteredPeople];
      }
    }
  }

  const hasFilters =
    department !== "" || manager !== "" || type !== "" || status !== "";

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress color={'error'} size={60} />
      </Box>
    );
  }

  return (
    <main>
      <Header />
      <div style={{ padding: 32 }}>
        <Filters
          people={people}
          onDepartmentChange={setDepartment}
          onManagerChange={setManager}
          onTypeChange={setType}
          onStatusChange={setStatus}
        />
        <OrgTree
          people={filteredPeople}
          hasFilters={hasFilters}
          manager={manager}
          department={department}
        />
      </div>
    </main>
  );
}