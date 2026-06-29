import mongoose from "mongoose";

const raceProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const carSchema = new mongoose.Schema(
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
      type: String, // 🔥 ไว้ลบรูป cloudinary
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    class: {
      type: String,
      required: true,
    },

    engine: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    racePrograms: [raceProgramSchema],

    category: {
      type: String,
      required: true,
      enum: ["GT3", "GT4", "SuperFormula Car", "Street", "Unknown"],
      default:"Unknown"
    },
  },
  { timestamps: true },
);

export default mongoose.model("Car", carSchema);