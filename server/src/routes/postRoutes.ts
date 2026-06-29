import express from "express";
import {
  getPosts,
  getSpecificPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController";

import upload from "../middleware/upload";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

// 👉 PUBLIC: ทุกคนดูโพสต์ได้
router.get("/", getPosts);
router.get("/:id", getSpecificPost);

// 👉 ADMIN ONLY: ต้อง login และเป็น admin เท่านั้น
router.post(
  "/",
  authMiddleware,
  isAdmin,
  upload.array("images", 10),
  createPost
);

router.put(
  "/:id",
  authMiddleware,
  isAdmin,
  upload.array("images", 10),
  updatePost
);

router.delete(
  "/:id",
  authMiddleware,
  isAdmin,
  deletePost
);

export default router;