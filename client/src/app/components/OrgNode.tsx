"use client";

import { useState } from "react";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Collapse, Box } from "@mui/material";

import { Person } from "../types";
import PersonCard from "./PersonCard";
import PersonDetails from "./PersonDetails";

interface Props {
  person: Person;
  children: React.ReactNode;
}

export default function OrgNode({ person, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <TreeItem
      itemId={String(person.id)}
      label={
        <Box onClick={() => setOpen(!open)}>
          <PersonCard person={person} open={open} />
        </Box>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <PersonDetails person={person} />
      </Collapse>

      {children}
    </TreeItem>
  );
}
