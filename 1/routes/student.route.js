const express = require("express");
const studentController = require("../controllers/student.controller");
const router = express.Router();

router
  .route("/")
  .get(studentController.getStudents)
  .post(studentController.createStudent);

module.exports = router;
