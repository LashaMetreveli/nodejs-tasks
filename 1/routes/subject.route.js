const express = require("express");
const subjectController = require("../controllers/subject.controller");
const router = express.Router();

router
  .route("/")
  .get(subjectController.getSubjects)
  .post(subjectController.createSubject);

router.route("/assign").post(subjectController.assignSubjectToStudent);

module.exports = router;
