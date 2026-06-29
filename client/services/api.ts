const BASE_URL = "http://localhost:5000/api";

// 🔥 GENERIC FETCH HANDLER (สำคัญมาก)
async function fetcher(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    cache: "no-store", // dev mode: ไม่ cache
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

// ✅ POSTS
export async function getPosts() {
  return fetcher("/posts");
}

// ✅ GET POSTS BY TAGS
export async function getPostsByTag(tag: string) {
  return fetcher(`/posts?tag=${tag}`);
}

// ✅ GET POSTS BY SECTION
export async function getPostsBySection(section: string) {
  return fetcher(`/posts?section=${section}`);
}

// ✅ DRIVERS
export async function getDrivers() {
  return fetcher("/drivers");
}

// ✅ CARS
export async function getCars() {
  return fetcher("/cars");
}

export async function getDriverById(id: string) {
  return fetcher(`/drivers/${id}`);
}

//////////////////////////////
// ADMIN
//////////////////////////////

type CreateAdminInput = {
  email: string;
  password: string;
  name: string;
};

async function authFetcher(endpoint: string, options: RequestInit = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("SESSION_EXPIRED");
  }

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

// ✅ CREATE ADMIN
export async function createAdmin(data: CreateAdminInput) {
  return authFetcher("/auth/create", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

//////////////////////////////
// ADMIN  CREATES POSTS UI
//////////////////////////////

export type PostSection =
  | "homeHero"
  | "homeGallery"
  | "gallery"
  | "drivers"
  | "cars";

export type CreatePostInput = {
  title: string;
  description: string;
  section: PostSection;
  tags: string[];
  images: File[];

  carData?: {
    country: string;
    class: string;
    engine: string;
    category: string;
    racePrograms: { name: string }[];
  };

  driverData?: {
    role: string;
    stats: string[];
  };
};

export async function createPost(data: CreatePostInput) {
  const token = localStorage.getItem("token");

  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("section", data.section);
  formData.append("tags", JSON.stringify(data.tags));

  if (data.carData) {
    formData.append("carData", JSON.stringify(data.carData));
  }

  if (data.driverData) {
    formData.append("driverData", JSON.stringify(data.driverData));
  }

  data.images.forEach((image) => {
    formData.append("images", image);
  });

  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const result = await res.json();

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("SESSION_EXPIRED");
  }

  if (!res.ok) {
    throw new Error(result.message || "Create post failed");
  }

  return result;
}
