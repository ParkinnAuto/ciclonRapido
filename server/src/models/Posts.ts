import mongoose from "mongoose";

// 📸 IMAGE SCHEMA
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
});

// 🧠 POST SCHEMA (สำคัญมาก)
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    // 🔥 images
    images: {
      type: [imageSchema],
      default: [],
    },

    // 🔥 SECTION (⭐ ตัวหลักที่คุณขาดอยู่)
    section: {
      type: String,
      enum: ["homeHero", "homeExamplePics", "gallery", "drivers", "cars"],
      required: true,
    },

    // 🔥 OPTIONAL (เอาไว้ filter เพิ่ม)
    tags: {
      type: [String],
      default: [],
    },

    // 🔥 สำหรับจัดลำดับ (สำคัญใน UI)
    order: {
      type: Number,
      default: 0,
    },

    // 🔥 เปิด/ปิดโชว์
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Post", postSchema);
