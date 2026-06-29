"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ 1. ดึงข้อมูลโพสต์เดิมมาแสดงใน form
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/posts/${id}`);

        if (!res.ok) {
          alert("Post not found");
          router.push("/admin");
          return;
        }

        const data = await res.json();

        setTitle(data.title || "");
        setDescription(data.description || "");
      } catch (err) {
        console.error("FETCH POST ERROR:", err);
        alert("Cannot fetch post");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, router]);

  // ✅ 2. ส่งข้อมูลใหม่ไป update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        router.push("/admin/login");
        return;
      }

      if (!res.ok) {
        alert("Update failed");
        return;
      }

      alert("Post updated successfully");
      router.push("/admin");
    } catch (err) {
      console.error("UPDATE POST ERROR:", err);
      alert("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <div className="max-w-3xl p-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Edit Post</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <div>
          <label className="block mb-2 font-medium">Title</label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="Post title"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-2 font-medium">Description</label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded min-h-40"
            placeholder="Post description"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 text-white bg-black rounded disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="px-5 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
