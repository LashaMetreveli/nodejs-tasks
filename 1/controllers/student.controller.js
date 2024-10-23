const asyncCatch = require("../error/error");
const Student = require("../models/student.model");

const getStudents = asyncCatch(async (req, res) => {
  const students = await Student.find(req.query).populate("subjects");
  res.send(students);
});

const createStudent = asyncCatch(async (req, res) => {
  const student = new Student(req.body);
  const newStudent = await student.save();
  res.send(newStudent);
});

module.exports = {
  getStudents,
  createStudent,
};
