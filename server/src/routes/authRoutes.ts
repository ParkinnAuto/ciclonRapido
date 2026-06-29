import express from "express";
import {
  login,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/authController";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

// ==========================
// 🔓 PUBLIC ROUTES
// ==========================

// LOGIN
router.post("/login", login);

// ==========================
// 🔐 PROTECTED ROUTES
// ==========================

// CREATE ADMIN (ควรให้ admin เท่านั้นสร้างได้)
router.post("/create", authMiddleware, isAdmin, createAdmin);

// UPDATE ADMIN
router.put("/:id", authMiddleware, isAdmin, updateAdmin);

// DELETE ADMIN
router.delete("/:id", authMiddleware, isAdmin, deleteAdmin);

export default router;