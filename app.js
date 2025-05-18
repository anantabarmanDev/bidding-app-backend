import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
 
// server listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  try {
    console.log("App is running on 4000");
  } catch (error) {
    console.log("Error", error.message);
  }
});
  