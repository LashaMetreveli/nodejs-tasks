const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongodb");

const subjectSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },

    credits: {
      type: Number,
      required: false,
      default: 30,
    },

    students: [
      {
        type: ObjectId,
        ref: "Student",
        required: false,
      },
    ],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Subject = model("Subject", subjectSchema);
module.exports = Subject;
