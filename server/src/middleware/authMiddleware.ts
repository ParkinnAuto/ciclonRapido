import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// ✅ เพิ่ม type ให้ req.user
export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

// 🔐 VERIFY TOKEN
export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    // ❌ ไม่มี token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 👉 ตัด "Bearer " ออก เหลือแค่ token
    const token = authHeader.split(" ")[1];

    // 🔥 verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      role: string;
    };

    // 👉 attach decoded token ไปที่ req.user
    req.user = decoded;

    next();
  } catch (error) {
    console.error("AUTH ERROR:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// 👑 CHECK ADMIN ROLE
export const isAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};