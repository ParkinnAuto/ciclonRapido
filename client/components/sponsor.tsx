"use client";

// ✅ TYPE
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

// ✅ Props
type Props = {
  post?: Post;
};

export default function Sponsor({ post }: Props) {
  // 🔒 กัน crash
  if (!post) return null;

  const imageUrl = post.images?.[0]?.url;

  return (
    <section className="px-6 py-20 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold tracking-wide md:text-5xl">
          OUR PARTNERS
        </h2>

        {/* underline */}
        <div className="w-16 h-1 mx-auto mt-3 bg-blue-500 rounded-full"></div>

        {/* description */}
        {post.description && (
          <p className="max-w-xl mx-auto mt-4 text-sm text-gray-500 md:text-base">
            {post.description}
          </p>
        )}

        {/* CARD */}
        <div className="flex justify-center mt-10">
          <div
            className="relative w-full max-w-2xl p-8 transition-all duration-300 border border-gray-200 shadow-lg group rounded-2xl bg-white/70 backdrop-blur-md md:p-12 hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* glow effect */}
            <div className="absolute inset-0 transition duration-500 opacity-0 -z-10 rounded-2xl bg-blue-400/20 blur-2xl group-hover:opacity-100" />

            {/* IMAGE */}
            <div className="flex justify-center mb-6">
              <img
                src={imageUrl || "/sponsor.png"}
                alt={post.title || "sponsor"}
                className="w-32 transition duration-300 md:w-40 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold md:text-2xl">
              {post.title || "Our Partner"}
            </h3>

            {/* DESC */}
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              {post.description || "Strategic partnership"}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}