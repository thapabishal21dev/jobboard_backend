import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  jobType: {
    type: String,
    enum: ["full-time", "part-time", "contract", "internship"],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  requirements: {
    type: [String], // Array of strings for requirements
  },
  responsibilities: {
    type: [String], // Array of strings for job responsibilities
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  isRemote: {
    type: Boolean,
    default: false,
  },
});

export const Job = mongoose.model("Job", jobSchema);
