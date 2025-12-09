import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*", 
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API online 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
