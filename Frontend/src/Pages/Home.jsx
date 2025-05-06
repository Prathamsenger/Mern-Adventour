import * as React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen bg-white-50 text-white">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen p-5">
        <div className="relative h-full w-full rounded-b-md overflow-hidden">
          <div
            className="h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg')",
            }}
          >
            <div className="bg-opacity-50 p-6 rounded-xl text-center">
              <h1 className="text-5xl font-bold mb-4">Explore the Great Outdoors</h1>
              <p className="font-bold text-6xl -lg mb-6">Find your next adventure in the wild.</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-600 transition">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Images in a Line */}
      <div className="flex justify-center gap-20 mt-6">        {/* Card 1 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://wallpaperaccess.com/full/1386109.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 2 */}
        
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full  h-50 object-cover rounded-t-lg"
            src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://skift.com/wp-content/uploads/2023/07/pexels-editz-central-editors-17117853-scaled-e1690273158715.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center gap-6 mt-6">
        {/* Card 4*/}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://indiaoutbound.info/wp-content/uploads/2020/02/tourism.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              <FaLocationDot/>
              <h5>  Santorini, Greece</h5>
          

            Fira, perched on the cliffs of Santorini, Greece, is absolutely breathtaking. The contrast of the iconic whitewashed buildings with blue domes against the deep blue Aegean Sea is unreal — like a postcard come to life
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 6*/}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 mb-8 mt-6">
        {/* Card 7 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>

        {/* Card 9 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-50 object-cover rounded-t-lg"
            src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
            alt="green iguana"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Lizard</h5>
            <p className="text-gray-700 text-base">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Share
            </button>
          </div>
        </div>
      </div>
      </div>
    
  

     
    
    

    
  );
};

export default Home;