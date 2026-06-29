"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      setLoading(true);

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ save token
      localStorage.setItem("token", data.token);

      // 👉 go dashboard
      router.push("/admin");

    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-[340px] p-8 bg-white shadow-lg rounded-xl">

        {/* 🔙 BACK BUTTON */}
        <button
          onClick={() => router.push("/")}
          className="mb-4 text-sm text-gray-500 hover:text-black"
        >
          ← Back to Home
        </button>

        <h2 className="mb-6 text-2xl font-bold text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 text-white bg-black rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}