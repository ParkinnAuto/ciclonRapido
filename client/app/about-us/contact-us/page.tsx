"use client";

export default function ContactPage() {
  const contacts = [
    {
      title: "Email",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor">
          <path d="M4 4h16v16H4z" strokeWidth="2"/>
          <path d="M4 4l8 8 8-8" strokeWidth="2"/>
        </svg>
      ),
      label: "ciclonrapido@gmail.com",
      link: "mailto:ciclonrapido@gmail.com",
    },
    {
      title: "YouTube",
      icon: (
        <svg width="28" height="28" fill="currentColor">
          <path d="M10 8l6 4-6 4V8z"/>
          <rect x="2" y="4" width="20" height="16" rx="4"/>
        </svg>
      ),
      label: "Rapido Racing",
      link: "https://youtube.com/@yourchannel",
    },
    {
      title: "Instagram",
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" strokeWidth="2"/>
          <circle cx="17" cy="7" r="1"/>
        </svg>
      ),
      label: "@ciclonrapido",
      link: "https://instagram.com/ciclonrapido",
    },
    {
      title: "Facebook",
      icon: (
        <svg width="28" height="28" fill="currentColor">
          <path d="M13 22v-8h3l1-4h-4V7c0-1 0-2 2-2h2V1h-3c-4 0-5 2-5 5v4H6v4h3v8h4z"/>
        </svg>
      ),
      label: "Ciclon Rapido",
      link: "https://facebook.com/ciclonrapido",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 bg-gray-50 md:px-10">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">
          We are always on the lookout to work with new clients.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Please get in touch in one of the following ways.
        </p>

        <div className="w-16 h-1 mx-auto mt-6 bg-blue-500 rounded-full" />
      </div>

      <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 md:grid-cols-4">
        {contacts.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            className="p-8 text-center transition-all duration-300 bg-white shadow-md  group rounded-2xl hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center justify-center mx-auto mb-4 text-white transition bg-blue-500 rounded-full w-14 h-14 group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>

            <p className="mt-2 text-sm text-gray-500 transition group-hover:text-blue-500">
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}