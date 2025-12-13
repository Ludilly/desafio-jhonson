import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import { Person } from "../types";

interface Props {
  person: Person;
  open: boolean;
}

export default function PersonCard({ person, open }: Props) {
  return (
    <Card
      sx={{
        borderLeft: "4px solid #EB1700",
        cursor: "pointer",
        background: open ? "#FFF3F0" : "white",
        "&:hover": { boxShadow: 3 }
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={person.photoPath || undefined} />
        <Box>
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif !important",
              fontWeight: "700 !important",
            }}
          >
              {person.name}
          </Typography>
          <Typography variant="body2">{person.jobTitle}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
