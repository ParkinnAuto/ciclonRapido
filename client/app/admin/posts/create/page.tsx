"use client";

import { useState } from "react";
import { createPost, CreatePostInput } from "@/services/api";
import { PostSection } from "@/services/api";

export default function CreatePostPage() {
  // =====================
  // BASIC
  // =====================
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState<PostSection | "">("");
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // =====================
  // CARS
  // =====================
  const [carData, setCarData] = useState({
    country: "",
    class: "",
    engine: "",
    category: "",
    racePrograms: "",
  });

  // =====================
  // DRIVERS
  // =====================
  const [driverData, setDriverData] = useState({
    role: "Reserve Driver",
    stats: "",
  });

  // =====================
  // IMAGE
  // =====================
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setImages((prev) => [...prev, ...newFiles].slice(0, 10));
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // =====================
  // SUBMIT
  // =====================
  const handleSubmit = async () => {
    try {
      if (!title || !section) {
        alert("Title and section required");
        return;
      }

      setLoading(true);

      const payload: CreatePostInput = {
        title,
        description,
        section,
        tags,
        images,
      };

      // 🚗 CARS
      if (section === "cars") {
        payload.carData = {
          country: carData.country,
          class: carData.class,
          engine: carData.engine,
          category: carData.category,
          racePrograms: carData.racePrograms
            .split(",")
            .map((s) => ({ name: s.trim() }))
            .filter((s) => s.name !== ""),
        };
      }

      // 🧍 DRIVERS
      if (section === "drivers") {
        payload.driverData = {
          role: driverData.role,
          stats: driverData.stats
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s !== ""),
        };
      }

      await createPost(payload);

      alert("Created successfully 🚀");

      // reset
      setTitle("");
      setDescription("");
      setImages([]);
      setTags([]);
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof Error && err.message === "SESSION_EXPIRED") {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
        return;
      }

      alert("Create failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto mt-10 bg-white shadow rounded-xl">
      <h1 className="mb-6 text-2xl font-bold">Create Post</h1>

      {/* TITLE */}
      <input
        placeholder="Title"
        className="w-full p-2 mb-3 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-3 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* SECTION */}
      <select
        value={section}
        onChange={(e) => setSection(e.target.value as PostSection)}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="homeGallery">Home ExamplePics</option>
        <option value="gallery">Gallery</option>
        <option value="cars">Cars</option>
        <option value="drivers">Drivers</option>
      </select>

      {/* 🚗 CARS */}
      {section === "cars" && (
        <div className="mb-4 space-y-2">
          <h3 className="font-semibold">Car Details</h3>

          <input
            placeholder="Country"
            className="w-full p-2 border rounded"
            onChange={(e) =>
              setCarData({ ...carData, country: e.target.value })
            }
          />

          <input
            placeholder="Class (Example: GT3, F1)"
            className="w-full p-2 border rounded"
            onChange={(e) => setCarData({ ...carData, class: e.target.value })}
          />

          <input
            placeholder="Engine"
            className="w-full p-2 border rounded"
            onChange={(e) => setCarData({ ...carData, engine: e.target.value })}
          />

          <input
            placeholder="Category"
            className="w-full p-2 border rounded"
            onChange={(e) =>
              setCarData({ ...carData, category: e.target.value })
            }
          />

          <input
            placeholder="Race Programs (comma separated)"
            className="w-full p-2 border rounded"
            onChange={(e) =>
              setCarData({ ...carData, racePrograms: e.target.value })
            }
          />
        </div>
      )}

      {/* 🧍 DRIVERS */}
      {section === "drivers" && (
        <div className="mb-4 space-y-2">
          <h3 className="font-semibold">Driver Details</h3>

          <select
            className="w-full p-2 border rounded"
            onChange={(e) =>
              setDriverData({ ...driverData, role: e.target.value })
            }
          >
            <option value="Main Driver">Main Driver</option>
            <option value="Reserve Driver">Reserve Driver</option>
          </select>

          <input
            placeholder="Stats (comma separated)"
            className="w-full p-2 border rounded"
            onChange={(e) =>
              setDriverData({ ...driverData, stats: e.target.value })
            }
          />
        </div>
      )}

      {/* GALLERY */}
      {section === "gallery" && (
        <div className="mb-4">
          <p className="mb-2 text-sm font-medium">Select Tags</p>

          <div className="flex gap-3">
            {["achievement", "sponsor"].map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                type="button"
                className={`px-4 py-2 rounded-full text-sm ${
                  tags.includes(tag) ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* IMAGE UPLOAD */}
      <div className="mb-4">
        <label
          className="
      flex flex-col items-center justify-center
      w-full min-h-[160px]
      border-2 border-dashed border-gray-300
      rounded-xl
      cursor-pointer
      bg-gray-50
      hover:bg-gray-100
      transition
      p-4
    "
        >
          {/* ถ้ายังไม่มีรูป */}
          {images.length === 0 && (
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">
                Click to upload images
              </p>
              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG (multiple allowed)
              </p>
            </div>
          )}

          {/* 🔥 PREVIEW อยู่ในกล่อง */}
          {images.length > 0 && (
            <div className="grid w-full grid-cols-2 gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    src={URL.createObjectURL(img)}
                    className="object-cover w-full h-32 rounded-lg"
                  />

                  {/* ❌ DELETE BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault(); // กัน label trigger
                      const newImages = images.filter(
                        (_, index) => index !== i,
                      );
                      setImages(newImages);
                    }}
                    className="absolute px-2 py-1 text-xs text-white transition rounded opacity-0 top-1 right-1 bg-black/70 group-hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* input */}
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              if (!files) return;

              setImages((prev) => [...prev, ...Array.from(files)]);
            }}
          />
        </label>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-2 mt-5 text-white bg-black rounded"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </div>
    </div>
  );
}
