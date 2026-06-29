import { Request, Response } from "express";
import Posts from "../models/Posts";
import cloudinary from "../config/cloudinary";
import Cars from "../models/Cars";
import Drivers from "../models/Drivers";

// GET ALL POSTS /api/posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const tagQuery = req.query.tag as string | undefined;
    const sectionQuery = req.query.section as string | undefined;

    let filter: any = {
      isPublished: true,
    };

    // 🔥 filter tag
    if (tagQuery) {
      const tags = tagQuery.split(",");
      filter.tags = { $in: tags };
    }

    // 🔥 filter section (สำคัญมาก)
    if (sectionQuery) {
      filter.section = sectionQuery;
    }

    const posts = await Posts.find(filter).sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Cannot get posts" });
  }
};

// GET ONE POST /api/posts/:id
export const getSpecificPost = async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Cannot get specific post" });
  }
};

// CREATE POST (upload + save ใน request เดียว)
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, description, tags, section, order } = req.body;

    // ✅ validate
    if (!title || !section) {
      return res.status(400).json({
        message: "Title and section are required",
      });
    }

    const validSections = [
      "homeHero",
      "homeGallery",
      "gallery",
      "drivers",
      "cars",
    ];

    if (!validSections.includes(section)) {
      return res.status(400).json({
        message: "Invalid section",
      });
    }

    // 🔥 parse tags
    let parsedTags: string[] = [];

    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch {
        parsedTags = [tags];
      }
    }

    // ❗ tags ใช้เฉพาะ gallery
    if (section !== "gallery") {
      parsedTags = [];
    }

    // 📸 images
    const files = req.files as Express.Multer.File[] | undefined;

    const images =
      files?.map((file) => ({
        url: file.path,
        public_id: file.filename,
        caption: "",
      })) || [];

    if (images.length === 0) {
      return res.status(400).json({
        message: "At least 1 image is required",
      });
    }

    const parsedOrder = Number(order) || 0;

    // ✅ 1. save to posts (หลัก)
    const newPost = await Posts.create({
      title,
      description,
      images,
      tags: parsedTags,
      section,
      order: parsedOrder,
      isPublished: true,
    });

    // =========================================
    // 🔥 2. SAVE TO CARS
    // =========================================
    if (section === "cars") {
      await Cars.create({
        name: title,
        image: images[0].url,
        public_id: images[0].public_id,

        // ⚠️ ใส่ default ไปก่อน
        country: "Unknown",
        class: "GT3",
        engine: "Unknown",

        description: description || "",

        racePrograms: [],
        category: "Unknown",
      });
    }

    // =========================================
    // 🔥 3. SAVE TO DRIVERS
    // =========================================
    if (section === "drivers") {
      await Drivers.create({
        name: title,
        image: images[0].url,
        public_id: images[0].public_id,

        stats: [],
        role: "Reserve Driver",
      });
    }

    res.status(201).json(newPost);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ message: "Create post failed" });
  }
};

// UPDATE POST
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const updates: any = {};

    // ✅ update text
    if (req.body.title) {
      updates.title = req.body.title;
    }

    if (req.body.description) {
      updates.description = req.body.description;
    }

    if (req.body.tags) {
      try {
        updates.tags = JSON.parse(req.body.tags); // ✅ อัปเดต tag
      } catch (err) {
        return res.status(400).json({ message: "tags format invalid" });
      }
    }

    if (req.body.section) {
      updates.section = req.body.section;
    }

    if (req.body.order) {
      updates.order = Number(req.body.order);
    }

    // 🔥 1. ลบรูปบางรูป (กัน parse พัง)
    if (req.body.removeImages) {
      let removeList: string[] = [];

      try {
        removeList = JSON.parse(req.body.removeImages);
      } catch (err) {
        return res.status(400).json({ message: "removeImages format invalid" });
      }

      // 👉 ลบจาก cloudinary
      for (const public_id of removeList) {
        if (public_id) {
          await cloudinary.uploader.destroy(public_id);
        }
      }

      // 👉 ลบจาก array
      post.images = post.images.filter(
        (img: any) => !removeList.includes(img.public_id),
      ) as any;
    }

    // 🔥 2. เพิ่มรูปใหม่
    const files = req.files as Express.Multer.File[] | undefined;

    if (files && files.length > 0) {
      const newImages = files.map((file: any) => ({
        url: file.path,
        public_id: file.filename,
        caption: "",
      }));

      post.images.push(...newImages);
    }

    // 👉 save images ใหม่
    updates.images = post.images;

    const updatedPost = await Posts.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    res.json(updatedPost);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: "Cannot update post" });
  }
};

// DELETE POST
export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔥 ลบรูปทั้งหมดใน cloudinary (กัน undefined)
    for (const image of post.images) {
      if (image.public_id) {
        await cloudinary.uploader.destroy(image.public_id);
      }
    }

    // 👉 ลบ post ใน DB
    await Posts.findByIdAndDelete(req.params.id);

    res.json({ message: "Post + images deleted ✅" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ message: "Cannot delete post" });
  }
};
