import { Request, Response, NextFunction } from "express";
import Admin from "../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//  LOGIN ADMIN
export const login = async (req: Request, res: Response) => {
  try {
    console.log("BODY:", req.body); // debug

    if (!req.body) {
      return res.status(400).json({ message: "No input received" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "3d" }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login Failed", error });
  }
};

// CREATE ADMIN
export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const exists = await Admin.findOne({ email });

    if (exists) {
      return res.status(401).json({ message: "Admin already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      email,
      password: hashed,
      name,
      role: "admin",
    });

    res.status(201).json({ message: "Admin created ", admin: newAdmin });
  } catch (error) {
    console.error("CREATE ADMIN ERROR: ", error);
    res.status(500).json({ message: "Create admin failed" });
  }
};
// UPDATE ADMIN
export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const adminId = req.params.id;
    const { newEmail, newPassword, newName } = req.body;

    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }
    if (newEmail) {
      const exists = await Admin.findOne({ email: newEmail });
      if (exists && exists._id.toString() !== adminId) {
        return res.status(400).json({ message: "Email already exists" });
      }
      admin.email = newEmail;
    }

    if (newPassword) {
      admin.password = await bcrypt.hash(newPassword, 10);
    }

    if (newName) {
      admin.name = newName;
    }

    await admin.save();

    res.json({ message: "Admin updated", admin });
  } catch (error) {
    console.error("UPDATE ADMIN FAILED");
    res.status(500).json({ message: "Update admin's data failed" });
  }
};

// DELETE ADMIN
export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const adminId = req.params.id;

    const deleted = await Admin.findByIdAndDelete(adminId);

    if (!deleted) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json({ message: "Admin deleted" });
  } catch (error) {
    console.error("UPDATE ADMIN FAILED");
    res.status(500).json({ message: "Update admin's data failed" });
  }
};