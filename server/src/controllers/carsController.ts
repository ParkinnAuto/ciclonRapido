import { Request, Response } from "express";
import Car from "../models/Cars";
import cloudinary from "../config/cloudinary";

// ✅ GET ALL CARS
export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await Car.find().sort({ createdAt: 1 });
    res.json(cars);
  } 
  
  catch (error) {
    res.status(500).json({ message: "Cannot get cars" });
  }
};

// ✅ GET SPECIFIC CAR
export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(car);
  } 
  
  catch (error) {
    res.status(500).json({ message: "Cannot get car" });
  }
};

// ✅ CREATE CAR (มีรูป)
export const createCar = async (req: Request, res: Response) => {
  try {
    const {
      name,
      country,
      class: carClass,
      engine,
      description,
      category,
      racePrograms,
    } = req.body;

    const file = req.file as Express.Multer.File | undefined;

    const newCar = await Car.create({
      name,
      country,
      class: carClass,
      engine,
      description,
      category,
      racePrograms: racePrograms ? JSON.parse(racePrograms) : [],
      image: file?.path || "",
      public_id: file?.filename || "",
    });

    res.status(201).json(newCar);
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot create car" });
  }
};

// 🔥 UPDATE CAR (มี/ไม่มีรูปก็ได้)
export const updateCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const {
      name,
      country,
      class: carClass,
      engine,
      description,
      category,
      racePrograms,
    } = req.body;

    const file = req.file as Express.Multer.File | undefined;

    // 👉 update text
    if (name) car.name = name;
    if (country) car.country = country;
    if (carClass) car.class = carClass;
    if (engine) car.engine = engine;
    if (description) car.description = description;
    if (category) car.category = category;
    if (racePrograms) car.racePrograms = JSON.parse(racePrograms);

    // 👉 ถ้ามีรูปใหม่
    if (file) {
      if (car.public_id) {
        await cloudinary.uploader.destroy(car.public_id);
      }

      car.image = file.path;
      car.public_id = file.filename;
    }

    await car.save();

    res.json(car);
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot update car" });
  }
};

// ❌ DELETE CAR
export const deleteCar = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // 👉 ลบรูป cloudinary
    if (car.public_id) {
      await cloudinary.uploader.destroy(car.public_id);
    }

    await Car.findByIdAndDelete(req.params.id);

    res.json({ message: "Car deleted ✅" });
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Cannot delete car" });
  }
};