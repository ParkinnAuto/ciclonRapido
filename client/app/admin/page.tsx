"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

type Post = {
  _id: string;
  title: string;
  images: { url: string }[];
};

type DecodedToken = {
  id: string;
  role: string;
  exp: number;
};

export default function AdminPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔐 check auth
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        router.push("/admin/login");
        return;
      }
    } catch (error) {
      localStorage.removeItem("token");
      router.push("/admin/login");
      alert("Session expired. Please login again.");
    }
  }, [router]);

  // 📦 fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 🗑 delete
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this post?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      localStorage.removeItem("token");
      alert("Session expired. Please login again.");
      router.push("/admin/login");
      return;
    }

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  // Edit
  const handleEdit = async (id: string) => {
    router.push(`/admin/posts/edit/${id}`);
  };

  if (loading) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <div className="max-w-6xl p-10 mx-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => router.push("/admin/posts/create")}
          className="px-4 py-2 text-white bg-black rounded"
        >
          + Create Post
        </button>
      </div>

      {/* POSTS GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} className="p-4 bg-white shadow rounded-xl">
            {/* IMAGE */}
            <img
              src={post.images?.[0]?.url}
              className="object-cover w-full h-40 rounded"
            />

            {/* TITLE */}
            <h3 className="mt-3 font-semibold">{post.title}</h3>

            {/* ACTION */}
            <div className="flex gap-4 mt-3">
              <button
                onClick={() => handleEdit(post._id)}
                className="text-sm text-black"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(post._id)}
                className="text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
