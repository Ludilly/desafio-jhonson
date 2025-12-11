"use client";

import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import OrgTree from "./components/OrgTree";
import { peopleService } from "./service/peopleService";
import { Person } from "./types";
import Header from "./components/Header";

export default function HierarchyPage() {
  const [people, setPeople] = useState<Person[]>([]);

  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    peopleService.getAll().then(setPeople);
  }, []);

  const filteredPeople = people.filter((p) => {
    if (department && p.department !== department) return false;
    if (manager && String(p.managerId) !== manager) return false;
    if (type && p.type !== type) return false;
    if (status && p.status !== status) return false;
    return true;
  });

  const hasFilters =
  department !== "" || manager !== "" || type !== "" || status !== "";


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
          department={department}
          hasFilters={hasFilters}
        />
      </div>
    </main>
  );
}
