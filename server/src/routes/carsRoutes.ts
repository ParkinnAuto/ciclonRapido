import express from "express";
import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carsController";

import upload from "../middleware/upload";

const router = express.Router();

// GET all cars
router.get("/", getCars);

// GET specific car
router.get("/:id", getCarById);

// CREATE car (มีรูป)
router.post("/", upload.single("image"), createCar);

// UPDATE car (มี/ไม่มีรูปก็ได้)
router.put("/:id", upload.single("image"), updateCar);

// DELETE car
router.delete("/:id", deleteCar);

export default router;