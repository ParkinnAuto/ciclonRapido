"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPosts } from "@/services/api";

type Post = {
  _id: string;
  title: string;
  images: {
    url: string;
    public_id: string;
  }[];
  tags: string[];
};

export default function SponsorsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const data = await getPosts();

        const sponsors = data.filter((post: Post) =>
          post.tags?.includes("sponsor")
        );

        setPosts(sponsors);
      } catch (error) {
        console.error("Failed to load sponsors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 md:px-10">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Our Partners
        </h1>

        <p className="mt-4 text-gray-500">
          We are proud to collaborate with partners who share our passion for
          performance and innovation.
        </p>

        <div className="w-16 h-1 mx-auto mt-6 bg-blue-500 rounded-full" />
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400">No partners found</p>
      ) : (
        <div
          className={`
            mx-auto max-w-5xl
            ${
              posts.length === 1
                ? "flex justify-center"
                : "grid gap-10 sm:grid-cols-2 md:grid-cols-3"
            }
          `}
        >
          {posts.map((post) => {
            const image = post.images?.[0];
            if (!image) return null;

            return (
              <div
                key={post._id}
                className={`
                  group
                  relative
                  bg-white
                  rounded-2xl
                  shadow-md
                  p-8
                  flex flex-col items-center justify-center
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  
                  ${posts.length === 1 ? "w-[360px] h-[200px]" : "h-[180px]"}
                `}
              >
                {/* LOGO */}
                <div className="relative w-[160px] h-[80px]">
                  <Image
                    src={image.url}
                    alt={post.title}
                    fill
                    className="object-contain transition-all duration-300  group-hover:scale-105"
                  />
                </div>

                {/* NAME (โชว์ตอน hover) */}
                <p className="mt-4 text-sm text-gray-500 transition-all duration-300 translate-y-2 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                  {post.title}
                </p>

                {/* subtle glow */}
                <div className="absolute inset-0 transition  rounded-2xl ring-0 group-hover:ring-2 ring-blue-400/30" />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}