import { getCars } from "@/services/api";

// TYPE
type Car = {
  _id: string;
  name: string;
  image: string;
  country: string;
  class: string;
  engine: string;
  description: string;
  racePrograms: { name: string }[];
  category: string;
};

// PAGE
export default async function CarsPage() {
  let cars: Car[] = [];

  try {
    cars = await getCars();
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        Failed to load cars 🚫
      </div>
    );
  }

  return (
    <main className="px-6 py-16 md:px-10 bg-gray-50">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">OUR CARS</h1>
        <p className="mt-4 text-gray-500">
          Premium race cars engineered for victory
        </p>
        <div className="w-16 h-1 mx-auto mt-3 bg-blue-500 rounded-full"></div>
      </div>

      {/* EMPTY */}
      {cars.length === 0 ? (
        <p className="text-center text-gray-400">No cars available</p>
      ) : (
        <div className="flex flex-col gap-16">
          {cars.map((car) => (
            <div
              key={car._id}
              className="flex flex-col items-center gap-10 p-6 mt-5 transition-all duration-300 bg-white shadow-md group md:flex-row rounded-2xl md:p-10 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* LEFT - INFO */}
              <div className="w-full space-y-5 md:w-1/2">
                <h2 className="text-3xl font-bold md:text-4xl">{car.name}</h2>

                {/* BADGES */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    <b>Country:</b> {car.country}
                  </span>

                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    <b>Class:</b> {car.class}
                  </span>

                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    <b>Engine:</b> {car.engine}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="leading-relaxed text-gray-600">
                  {car.description}
                </p>

                {/* RACE PROGRAM */}
                <div className="p-5 bg-gray-100 rounded-xl">
                  <p className="mb-2 font-semibold text-blue-500">
                    Race Programs:
                  </p>

                  <ul className="space-y-1 text-sm text-gray-600 md:text-base">
                    {car.racePrograms?.map((rp, i) => (
                      <li key={i}>• {rp.name}</li>
                    ))}
                  </ul>
                </div>

                {/* CATEGORY BUTTON */}
                <div className="flex justify-center">
                  <span
                    className={`
      px-5 py-2 text-sm text-white rounded-full
      ${
        car.category === "GT3"
          ? "bg-blue-500"
          : car.category === "GT4"
            ? "bg-green-500"
            : "bg-gray-400"
      }
    `}
                  >
                    {car.category || "Unknown"}
                  </span>
                </div>
              </div>

              {/* RIGHT - IMAGE */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="
                      w-full h-[250px] md:h-[320px]
                      object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
