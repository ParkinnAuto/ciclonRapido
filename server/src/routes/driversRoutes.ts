import express from "express";
import {
  getDrivers,
  getDriverById,
  createDriver,
  updateDriver,
  deleteDriver,
} from "../controllers/driversController";

import upload from "../middleware/upload";

const router = express.Router();

// GET ALL DRIVERS
router.get("/", getDrivers);

// GET SPECIFIC DRIVER
router.get("/:id", getDriverById);

// CREATE DRIVER (มีรูป)
router.post("/", upload.single("image"), createDriver);

// UPDATE DRIVER (มี/ไม่มีรูปก็ได้)
router.put("/:id", upload.single("image"), updateDriver);

// DELETE DRIVER
router.delete("/:id", deleteDriver);

export default router;