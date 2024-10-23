const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongodb");

const studentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
      },
      default: "active",
      required: false,
    },
    subjects: [
      {
        type: ObjectId,
        ref: "Subject",
        required: false,
        default: [],
      },
    ],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Student = model("Student", studentSchema);
module.exports = Student;
