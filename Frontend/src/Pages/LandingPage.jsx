import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen  text-white">
      {/* Top-right corner buttons */}
      <div className="absolute top-6 right-6 flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Signup
        </Link>
      </div>

      {/* Hero Section */}
      <div className="h-screen">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-150 p-5">
              <div
                className="h-200 w-full flex items-center justify-center bg-auto bg-center"
                style={{
                  backgroundImage:
                    "url('http://i.huffpost.com/gen/1871544/images/o-TRAVELING-facebook.jpg')",
                }}
              >
                <div className="bg-opacity-50 p-6 rounded-xl text-center">
                  <h1 className="text-5xl font-bold mb-4">Explore the Great Outdoors</h1>
                  <p className="font-bold text-2xl mb-6">Find your next adventure in the wild.</p>
                  <Link
                    to="/signup"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-600 transition"
                  >
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-150 p-4">
              <div
                className="h-200 w-full flex items-center justify-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://wallpapercave.com/wp/wp3812055.jpg')",
                }}
              >
                <div className="p-6 rounded-xl text-center">
                  <h1 className="text-5xl font-bold mb-4">Discover New Horizons</h1>
                  <p className="font-bold text-2xl mb-6">Adventure awaits you.</p>
                  <Link
                    to="/login"
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-600 transition"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-150 p-5">
              <div
                className="h-200 w-full flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://www.tripsavvy.com/thmb/Nrhf1_k96t_SphJsN4XAcoNDTvc=/2121x1414/filters:fill(auto,1)/GettyImages-584374227-58ac1d273df78c345b154d7a.jpg')",
                }}
              >
                <div className="bg-opacity-50 p-6 rounded-xl text-center">
                  <h1 className="text-5xl font-bold mb-4">Unleash Your Wanderlust</h1>
                  <p className="font-bold text-2xl mb-6">Travel the world with us.</p>
                  <Link
                    to="/signup"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-600 transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Additional Section */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Adventour?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Adventour is your ultimate travel planner. Discover breathtaking destinations, plan your
          dream holidays, and explore exciting activities. Join us to make your travel experiences
          unforgettable!
        </p>
        <div className="flex justify-center gap-6  mb-1">
          <Link
            to="/signup"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;