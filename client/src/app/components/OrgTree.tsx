"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Person } from "../types";
import OrgNode from "./OrgNode";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

interface Props {
  people: Person[];
  hasFilters?: boolean;
  manager?: string;
  department?: string;
}

export default function OrgTree({ people, hasFilters, manager }: Props) {
  if (!people || people.length === 0) return <div>No results found</div>;

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

  if (!hasFilters) {
    const realRoot = people.find((p) => p.managerId === null);
    if (!realRoot) return <div>Root employee not found</div>;

    return (
      <SimpleTreeView
        slots={{ collapseIcon: ExpandMoreIcon, expandIcon: ChevronRightIcon }}
        sx={{ padding: 2 }}
      >
        {buildTree(realRoot)}
      </SimpleTreeView>
    );
  }

 
  if (manager) {
    const managerIdNum = Number(manager);
    const selectedManager = people.find((p) => p.id === managerIdNum);

    if (selectedManager) {
      return (
        <SimpleTreeView
          slots={{ collapseIcon: ExpandMoreIcon, expandIcon: ChevronRightIcon }}
          sx={{ padding: 2 }}
        >
          {buildTree(selectedManager)}
        </SimpleTreeView>
      );
    }
  }

  const rootCandidates = people.filter((p) => !people.some((x) => x.id === p.managerId));

  if (rootCandidates.length === 1) {
    const root = rootCandidates[0];
    return (
      <SimpleTreeView
        slots={{ collapseIcon: ExpandMoreIcon, expandIcon: ChevronRightIcon }}
        sx={{ padding: 2 }}
      >
        {buildTree(root)}
      </SimpleTreeView>
    );
  }

  return (
    <SimpleTreeView
      slots={{ collapseIcon: ExpandMoreIcon, expandIcon: ChevronRightIcon }}
      sx={{ padding: 2 }}
    >
      <OrgNode
        person={{
          id: -1,
          name: "Filtered Results",
          department: "",
          managerId: null,
          type: "Employee",
          photoPath: "",
          jobTitle: "",
          status: "Active",
        }}
      >
        {rootCandidates.map((root) => buildTree(root))}
      </OrgNode>
    </SimpleTreeView>
  );
}
