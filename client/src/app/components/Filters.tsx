"use client";

import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Person } from "../types";

interface Props {
  people: Person[];
  onDepartmentChange?: (value: string) => void;
  onManagerChange?: (value: string) => void;
  onTypeChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
}

export default function Filters({
  people,
  onDepartmentChange,
  onManagerChange,
  onTypeChange,
  onStatusChange
}: Props) {
  
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const departments = [...new Set(people.map((p) => p.department))];

  const managers = people.filter((p) =>
    people.some((child) => child.managerId === p.id)
  );

  return (
    <Box display="flex" gap={2} my={3} flexWrap="wrap">

      {/* Department */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Department</InputLabel>
        <Select
          value={department}
          label="Department"
          onChange={(e) => {
            setDepartment(e.target.value);
            onDepartmentChange?.(e.target.value);
          }}
        >
          <MenuItem value="">All</MenuItem>
          {departments.map((d) => (
            <MenuItem key={d} value={d}>{d}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Manager */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Manager</InputLabel>
        <Select
          value={manager}
          label="Manager"
          onChange={(e) => {
            setManager(e.target.value);
            onManagerChange?.(e.target.value);
          }}
        >
          <MenuItem value="">All</MenuItem>
          {managers.map((m) => (
            <MenuItem key={m.id} value={String(m.id)}>
              {m.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Type */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          label="Type"
          onChange={(e) => {
            setType(e.target.value);
            onTypeChange?.(e.target.value);
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Employee">Employee</MenuItem>
          <MenuItem value="Partner">Partner</MenuItem>
        </Select>
      </FormControl>

      {/* Status */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => {
            setStatus(e.target.value);
            onStatusChange?.(e.target.value);
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>

    </Box>
  );
}
