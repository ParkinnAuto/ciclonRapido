import ExamplePics from "@/components/examplePics";
import Sponsor from "@/components/sponsor";
import { getPosts } from "@/services/api";
import Link from "next/link";

// ✅ TYPE
type Post = {
  _id: string;
  title: string;
  description: string;
  section: "hero" | "gallery" | "sponsor";
  images: {
    url: string;
    public_id: string;
  }[];
};

export default async function Home() {
  let data: Post[] = [];

  try {
    data = await getPosts();
  } catch (error) {
    console.error("Fetch posts error:", error);
  }

  // 🔥 แยกตาม section
  const hero = data.find((p) => p.section === "hero");
  const gallery = data.filter((p) => p.section === "gallery");
  const sponsor = data.find((p) => p.section === "sponsor");

  return (
    <main className="flex-1">
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] md:h-[85vh] overflow-hidden group">
        
        {/* 🔥 dynamic hero */}
        <img
          src="/images/hero.webp"
          alt="hero"
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-[1200ms] ease-out
            group-hover:scale-110
          "
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {hero?.title || "Welcome to Ciclón Rápido"}
          </h1>

          <p className="max-w-2xl mb-8 text-sm text-gray-300 md:text-lg">
            {hero?.description || "Excellence through innovation and design."}
          </p>

          <Link href="/about-us/contact-us">
            <button
              className="px-8 py-3 font-medium text-white transition-all rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* divider */}
      <div className="h-px my-5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* ================= GALLERY ================= */}
      <ExamplePics posts={gallery} />

      {/* ================= SPONSOR ================= */}
      <Sponsor post={sponsor} />
    </main>
  );
}