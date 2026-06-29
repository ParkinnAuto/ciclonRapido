export default function OurHistoryPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 md:px-10">
      
      {/* CONTAINER */}
      <div className="max-w-3xl mx-auto">
        
        {/* YEAR */}
        <p className="mb-2 text-sm font-semibold tracking-widest text-blue-500">
          SINCE 2024
        </p>

        {/* TITLE */}
        <h1 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
          Our Founding Story
        </h1>

        {/* LINE */}
        <div className="w-16 h-1 mb-10 bg-blue-500 rounded-full" />

        {/* CONTENT */}
        <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
          
          <p>
            Founded in 2024, our racing team emerged from a shared passion for speed,
            precision, and the thrill of competition. What began as a small group of
            enthusiasts has evolved into a formidable presence in the world of
            motorsport, competing at various prestigious events around the globe.
          </p>

          <p>
            Over the years, we have cultivated a reputation for excellence, achieving
            numerous podium finishes and securing valuable partnerships that have
            fueled our growth. As we continue to push the boundaries of performance,
            we remain dedicated to fostering talent, embracing innovation, and
            inspiring the next generation of racers.
          </p>

          {/* SUB TITLE */}
          <h2 className="pt-6 text-xl font-semibold text-black md:text-2xl">
            Building From The Ground Up
          </h2>

          <p>
            In our early years, we focused on grassroots racing, participating in
            local events and honing our skills. Among our founders, Parkin
            Arsanamanee faced significant challenges in life. Struggling with
            personal loss, he found himself at a crossroads, unsure of his next
            steps.
          </p>

          <p>
            Recognizing his potential and determination, fellow founder Vinit
            Thongchaidamrongkul reached out to him with an invitation to create
            something extraordinary: <span className="font-semibold text-black">Ciclón Rápido</span>.
            This partnership not only reignited Parkin&apos;s passion for racing but also
            laid the foundation for a team built on resilience and camaraderie.
          </p>

        </div>

        {/* QUOTE */}
        <div className="pl-6 border-l-4 border-blue-500 mt-14">
          <p className="text-lg italic text-gray-800">
            Somos los Granadores. We are the winner.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Parkin Arsanamanee, Co-Founder
          </p>
        </div>

      </div>
    </main>
  );
}