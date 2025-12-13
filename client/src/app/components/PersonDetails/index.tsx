import { Box, Typography } from "@mui/material";
import { Person } from "../types";

interface Props {
  person: Person;
}

export default function PersonDetails({ person }: Props) {
  return (
    <Box sx={{ pl: 4, py: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 700, marginRight: '4px' }}>Department: </Typography>
        <Typography>{person.department}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 700, marginRight: '4px' }}>Job Position: </Typography>
        <Typography>{person.jobTitle}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 700, marginRight: '4px' }}>Type:</Typography>
        <Typography>{person.type}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ fontWeight: 700, marginRight: '4px' }}>Status:</Typography>
        <Typography>{person.status}</Typography>
      </Box>
    </Box>
  );
}
