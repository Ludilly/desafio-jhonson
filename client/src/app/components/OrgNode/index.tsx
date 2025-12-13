"use client";
import { useState } from "react";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Collapse, Box } from "@mui/material";
import PersonCard from "../PersonCard";
import PersonDetails from "../PersonDetails";
import { Person } from "@/app/types";

interface Props {
  person: Person;
  children: React.ReactNode;
}

export default function OrgNode({ person, children }: Props) {
  const [open, setOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <TreeItem
      onClick={handleToggle}
      itemId={String(person.id)}
      label={
        <Box sx={{ cursor: "pointer" }}>
          <PersonCard person={person} open={open} />
        </Box>
      }
      slots={{
        groupTransition: Collapse,
      }}
      slotProps={{
        groupTransition: { in: open, timeout: 300, unmountOnExit: true },
      }}
    >
      <PersonDetails person={person} />
      {children}
    </TreeItem>
  );
}