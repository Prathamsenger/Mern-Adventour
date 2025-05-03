import { useState } from "react";

export default function CountryNavPage() {
  const countries = [
    {
      name: "France",
      places: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    },
    {
      name: "Japan",
      places: ["Mount Fuji", "Tokyo Tower", "Fushimi Inari Shrine"],
    },
    {
      name: "Australia",
      places: ["Christ the Redeemer", "Sugarloaf Mountain", "Iguazu Falls"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="min-h-screen bg-gray-500 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">Explore Countries</h1>
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="md:w-1/4 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Select a Country</h2>
          <ul>
            {countries.map((country, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-lg mb-2 text-lg ${
                  selectedCountry.name === country.name ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCountry(country)}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-3/4 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">{selectedCountry.name}</h2>
          <h3 className="text-xl font-semibold mb-2">Famous Places</h3>
          <ul className="list-disc list-inside text-lg">
            {selectedCountry.places.map((place, idx) => (
              <li key={idx}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
