import mongoose from "mongoose";
import HttpError from "../helpers/HttpError.js";
import controllerDecorator from "../helpers/controllerDecorator.js";
import StudentsModel from "../models/studentModel.js";

export const createStudents = controllerDecorator(async (req, res) => {
  const student = await StudentsModel.create(req.body);
  res.send(student);
});

export const getStudents = controllerDecorator(async (req, res) => {
  const students = await StudentsModel.find();
  res.send(students);
});

export const getStudentById = controllerDecorator(async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    throw HttpError("Invalid id", 400);
  }
  const student = await StudentsModel.findById(id);

  if (!student) {
    throw HttpError("Student not found", 404);
  }
  res.send(student);
});

export async function removeStudents(req, res) {}
export async function updateStudents(req, res) {}
