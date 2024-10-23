const asyncCatch = require("../error/error");
const Subject = require("../models/subject.model");
const Student = require("../models/student.model");

const getSubjects = asyncCatch(async (req, res) => {
  const subjects = await Subject.find(req.query).populate("students");
  res.send(subjects);
});

const createSubject = asyncCatch(async (req, res) => {
  const subject = new Subject(req.body);
  const newSubject = await subject.save();
  res.send(newSubject);
});

const assignSubjectToStudent = asyncCatch(async (req, res) => {
  const { studentId, subjectId } = req.body;

  const student = await Student.findById(studentId);
  const subject = await Subject.findById(subjectId);

  if (student.subjects.includes(subject._id)) {
    return res
      .status(400)
      .send({ message: "Subject is already assigned to this student." });
  }

  student.subjects.push(subject._id);
  subject.students.push(student._id);

  await student.save();
  await subject.save();

  res.send({ success: true });
});

module.exports = {
  getSubjects,
  createSubject,
  assignSubjectToStudent,
};
