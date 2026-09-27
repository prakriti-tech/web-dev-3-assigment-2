const express = require("express");
const studentsRouter = require("./routes/students");

const app = express();

app.use(express.json());

app.use("/students", studentsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});