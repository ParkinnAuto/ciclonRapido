import { Request, Response } from "express";
import Driver from "../models/Drivers";
import cloudinary from "../config/cloudinary";

// ✅ GET ALL DRIVERS
export const getDrivers = async (req: Request, res: Response) => {
  try {
    const drivers = await Driver.find().sort({ createdAt: 1 });
    res.json(drivers);
  } 
  
  catch (error) {
    res.status(500).json({ message: "Cannot get drivers" });
  }
};

// ✅ GET SPECIFIC DRIVER
export const getDriverById = async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    res.json(driver);
  } 
  
  catch (error) {
    res.status(500).json({ message: "Cannot get driver" });
  }
};

// ✅ CREATE DRIVER (มีรูป)
export const createDriver = async (req: Request, res: Response) => {
  try {
    const { name, stats } = req.body;

    const file = req.file as Express.Multer.File | undefined;

    const newDriver = await Driver.create({
      name,
      stats: stats ? JSON.parse(stats) : [],
      image: file?.path || "",
      public_id: file?.filename || "",
    });

    res.status(201).json(newDriver);
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Create driver failed" });
  }
};

// 🔥 UPDATE DRIVER (รองรับมีรูป / ไม่มีรูป)
export const updateDriver = async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    const { name, stats, role } = req.body;
    const file = req.file as Express.Multer.File | undefined;

    // 👉 update text
    if (name) {
      driver.name = name;
    }

    if (stats) {
      driver.stats = JSON.parse(stats);
    }

    if (role) {
      driver.role = role;
    }

    // 👉 ถ้ามีรูปใหม่
    if (file) {
      // ลบรูปเก่า
      if (driver.public_id) {
        await cloudinary.uploader.destroy(driver.public_id);
      }

      // ใส่รูปใหม่
      driver.image = file.path;
      driver.public_id = file.filename;
    }

    await driver.save();

    res.json(driver);
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot update driver" });
  }
};

// ❌ DELETE DRIVER
export const deleteDriver = async (req: Request, res: Response) => {
  try {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }

    // 👉 ลบรูปจาก cloudinary
    if (driver.public_id) {
      await cloudinary.uploader.destroy(driver.public_id);
    }

    // 👉 ลบใน DB
    await Driver.findByIdAndDelete(req.params.id);

    res.json({ message: "Driver deleted ✅" });
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot delete driver" });
  }
};