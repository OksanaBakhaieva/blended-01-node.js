import express from "express";
import {
  createStudents,
  getStudentById,
  getStudents,
} from "../controllers/studentsController.js";

const studentsRouter = express.Router();

studentsRouter.get("/", getStudents);
studentsRouter.post("/", createStudents);
studentsRouter.get("/:id", getStudentById);

export default studentsRouter;
