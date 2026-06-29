import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    public_id: {
      type: String, // ใช้ลบรูปใน Cloudinary
      required: true,
    },

    stats: {
      type: [String],
      default: [],
    },

    role: {
      type: String,
      required: true,
      enum: ["Main Driver", "Reserve Driver"],
      default: "Reserve Driver",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Drivers", driverSchema);