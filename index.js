import express from "express";
import router from "./router/index.js";
import { dbConnect } from "./database/connect.js";
export const app = express();
app.use(express.json());
router();
dbConnect();

app.listen(5000, () => console.log("app running"));
