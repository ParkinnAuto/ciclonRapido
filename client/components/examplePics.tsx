"use client";

import { useState } from "react";

// ✅ TYPE ของ Post (ควรย้ายไป types/post.ts ถ้าโปรเจคใหญ่)
type Post = {
  _id: string;
  title: string;
  description: string;
  section: string;
  images: {
    url: string;
    public_id: string;
  }[];
};

// ✅ Props type
type Props = {
  posts: Post[];
};

export default function ExamplePics({ posts }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  // 🔒 กัน crash
  if (!posts || posts.length === 0) return null;

  return (
    <section className="px-4 py-16 mx-auto md:px-10 max-w-7xl">
      
      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const imageUrl = post.images?.[0]?.url;

          if (!imageUrl) return null;

          return (
            <div
              key={post._id}
              onClick={() => setSelected(imageUrl)}
              className="overflow-hidden transition-all duration-300 shadow-md cursor-pointer rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          );
        })}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected}
              alt="preview"
              className="w-full shadow-2xl rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}