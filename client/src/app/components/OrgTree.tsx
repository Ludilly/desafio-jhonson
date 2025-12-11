"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Person } from "../types";
import OrgNode from "./OrgNode";

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

interface Props {
  people: Person[];
}

export default function OrgTree({ people }: Props) {
  if (!people || people.length === 0) return <div>No data</div>;

  const root = people.find((p) => p.managerId === null);
  if (!root) return <div>No root person found</div>;

  const buildTree = (person: Person) => {
    const children = people.filter((p) => p.managerId === person.id);

    return (
      <OrgNode key={person.id} person={person}>
        {children.map((child) => buildTree(child))}
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
      {buildTree(root)}
    </SimpleTreeView>
  );
}
