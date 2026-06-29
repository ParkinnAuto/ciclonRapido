import { getDrivers } from "@/services/api";

// ✅ TYPE
type Driver = {
  _id: string;
  name: string;
  image: string;
  stats: string[];
  role: "Main Driver" | "Reserve Driver";
};

// ✅ PAGE
export default async function DriversPage() {
  let drivers: Driver[] = [];

  try {
    drivers = await getDrivers();
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-500">
        Failed to load drivers 🚫
      </div>
    );
  }

  return (
    <main className="flex-1 px-6 py-16 md:px-10 bg-gray-50">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">MEET OUR DRIVERS</h1>

        <p className="mt-4 text-gray-500">
          The talented racers behind Ciclón Rápido success
        </p>

        <div className="w-16 h-1 mx-auto mt-3 bg-blue-500 rounded-full"></div>
      </div>

      {/* EMPTY STATE */}
      {drivers.length === 0 ? (
        <p className="text-center text-gray-400">No drivers available</p>
      ) : (
        <div className="flex flex-col gap-12">
          {drivers.map((driver, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={driver._id}
                className={`
                  group
                  flex flex-col md:flex-row items-center gap-8
                  bg-white rounded-2xl p-6 md:p-10
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  ${isReverse ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* IMAGE */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={driver.image}
                      alt={driver.name}
                      className="
                        w-full h-[250px] md:h-[320px]
                        object-cover
                        transition duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* INFO */}
                <div className="w-full text-center md:w-1/2">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    {driver.name}
                  </h2>

                  <div className="p-5 space-y-2 text-sm text-gray-600 bg-gray-100 rounded-xl md:text-base">
                    {driver.stats?.map((s, i) => (
                      <p key={i}>- {s}</p>
                    ))}
                  </div>

                  <div className="flex justify-center w-full">
                    <span
                      className={`
      px-5 py-2 mt-5 text-sm text-white rounded-full
      transition-all duration-300
      hover:scale-105 active:scale-95
      
      ${
        driver.role === "Main Driver"
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-400 hover:bg-gray-500"
      }
    `}
                    >
                      {driver.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
