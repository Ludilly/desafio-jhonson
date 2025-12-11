"use client";

import { useEffect, useState } from "react";
import { Person } from "./types";
import OrgTree from "./components/OrgTree";
import { peopleService } from "./service/peopleService";

export default function HierarchyPage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    peopleService
      .getAll()
      .then((data) => setPeople(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <main style={{ padding: 32 }}>
      <h1>Organizational Tree</h1>
      <OrgTree people={people} />
    </main>
  );
}
