"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Person } from "../types";
import OrgNode from "./OrgNode";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

interface Props {
  people: Person[];
  department?: string;
  hasFilters?: boolean;
}

export default function OrgTree({ people, hasFilters }: Props) {
  if (!people || people.length === 0) return <div>No results</div>;

  if (!hasFilters) {
    const realRoot = people.find((p) => p.managerId === null);
    if (!realRoot) return <div>Root employee not found</div>;

    const buildTree = (person: Person) => {
      const children = people
        .filter((p) => p.managerId === person.id)
        .map((child) => buildTree(child));

      return (
        <OrgNode key={person.id} person={person}>
          {children}
        </OrgNode>
      );
    };

    return (
      <SimpleTreeView
        slots={{
          collapseIcon: ExpandMoreIcon,
          expandIcon: ChevronRightIcon,
        }}
        sx={{ padding: 2 }}
      >
        {buildTree(realRoot)}
      </SimpleTreeView>
    );
  }

  const buildTree = (person: Person) => {
    const children = people
      .filter((p) => p.managerId === person.id)
      .map((child) => buildTree(child));

    return (
      <OrgNode key={person.id} person={person}>
        {children}
      </OrgNode>
    );
  };

  const topLevel = people.filter(
    (p) => p.managerId === null || !people.some((x) => x.id === p.managerId)
  );

  return (
    <SimpleTreeView
      slots={{
        collapseIcon: ExpandMoreIcon,
        expandIcon: ChevronRightIcon,
      }}
      sx={{ padding: 2 }}
    >
      <OrgNode
        person={{
          id: -1,
          name: "Filtered results",
          department: "",
          managerId: null,
          type: "Employee",
          photoPath: "",
          jobTitle: "",
          status: "Active",
        }}
      >
        {topLevel.map((t) => buildTree(t))}
      </OrgNode>
    </SimpleTreeView>
  );
}
