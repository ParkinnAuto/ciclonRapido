"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { getPosts } from "@/services/api";

// TYPES
type ImageType = {
  url: string;
  public_id: string;
};

type Post = {
  _id: string;
  title: string;
  description?: string;
  images?: ImageType[];
};

export default function GalleryPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);

  // FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // LOCK SCROLL
  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "auto";
  }, [selectedPost]);

  // PRELOAD
  useEffect(() => {
    if (!selectedPost) return;

    selectedPost.images?.forEach((img) => {
      const i = new window.Image();
      i.src = img.url;
    });
  }, [selectedPost]);

  // FUNCTIONS
  const openModal = (post: Post) => {
    setSelectedPost(post);
    setCurrentIndex(0);
  };

  const closeModal = () => setSelectedPost(null);

  const next = () => {
    if (!selectedPost?.images) return;
    setCurrentIndex((i) => (i < selectedPost.images!.length - 1 ? i + 1 : i));
  };

  const prev = () => {
    if (!selectedPost?.images) return;
    setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedPost) return;

      if (e.key === "ArrowRight") {
        next();
      }

      if (e.key === "ArrowLeft") {
        prev();
      }

      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedPost, currentIndex]);

  // 📱 SWIPE
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next(); // swipe left
    if (diff < -50) prev(); // swipe right
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gray-50 md:px-10">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-3xl font-bold md:text-5xl">GALLERY</h1>
        <p className="mt-4 text-gray-500">Explore a curated collection that encapsulates our cherished moments and experiences. Each image tells a story, reflecting the artistry and passion behind our creations. We invite you to delve into this visual journey that celebrates the essence of our shared memories.</p>
        <div className="w-16 h-1 mx-auto mt-3 bg-blue-500 rounded-full" />
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[260px] bg-gray-300 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const first = post.images?.[0];
            if (!first) return null;

            return (
              <div
                key={post._id}
                onClick={() => openModal(post)}
                className="relative overflow-hidden transition bg-white shadow-md cursor-pointer rounded-2xl group hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={first.url}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-[260px] w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* multi badge */}
                {post.images && post.images.length > 1 && (
                  <div className="absolute px-2 py-1 text-xs text-white rounded-full top-3 right-3 bg-black/60">
                    {post.images.length} 📸
                  </div>
                )}

                <div className="absolute inset-0 flex items-end p-4 transition bg-black/0 group-hover:bg-black/40">
                  <p className="text-sm text-white opacity-0 group-hover:opacity-100">
                    {post.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ================= MODAL ================= */}
      {selectedPost && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl overflow-hidden bg-black rounded-xl md:flex"
          >
            {/* LEFT: IMAGE */}
            <div
              className="relative w-full md:w-2/3 h-[60vh] md:h-[80vh]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={selectedPost.images?.[currentIndex].url || ""}
                alt=""
                fill
                priority
                className="object-contain"
              />

              {/* arrows */}
              {selectedPost.images!.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute text-3xl text-white left-3 top-1/2"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute text-3xl text-white right-3 top-1/2"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* RIGHT: INFO */}
            <div className="flex flex-col w-full p-6 bg-white md:w-1/3">
              <button
                onClick={closeModal}
                className="self-end mb-4 text-lg text-black"
              >
                ✕
              </button>

              <h2 className="mb-2 text-xl font-bold">{selectedPost.title}</h2>

              <p className="text-sm text-gray-600">
                {selectedPost.description}
              </p>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-6">
                {selectedPost.images?.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i === currentIndex ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
