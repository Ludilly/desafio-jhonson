import { Box, Typography } from "@mui/material";
import { Person } from "../types";

interface Props {
  person: Person;
}

export default function PersonDetails({ person }: Props) {
  return (
    <Box sx={{ pl: 4, py: 2 }}>
      <Typography>Department: {person.department}</Typography>
      <Typography>Manager ID: {person.managerId ?? "None"}</Typography>
      <Typography>Type: {person.type}</Typography>
      <Typography>Status: {person.status}</Typography>
    </Box>
  );
}
