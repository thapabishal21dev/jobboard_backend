import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    established: {
      type: Date,
      required: true,
    },
    website: {
      type: String,
    },
    employees: {
      type: Number,
      min: 0,
      default: 0,
    },
    companyLogo: {
      type: String, // URL to the company logo
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
