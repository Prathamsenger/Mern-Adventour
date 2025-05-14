import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import HeroImages from '../components/HeroImages';
import Services from '../components/Services';


const Home = () => {
  return (

    <div className="min-h-screen bg-white-50 text-white">
          <HeroImages/>
          <Services/>

     
      {/* Swiper Section */}
      <div className="  ml-30 mt-6 mr-12 mb-5">
      <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={5}
  slidesPerView={3}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://wallpaperaccess.com/full/1386109.jpg"
        alt="Destination 1"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Canada, Gananoque Island</h5>
        <p className="text-gray-700 text-base">
          Far far away, behind the word mountains, far from the countries of Chaos, there live the blind texts.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
        alt="Destination 2"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">France, Eiffel Tower</h5>
        <p className="text-gray-700 text-base">
          Experience the beauty of Paris with a visit to the iconic Eiffel Tower and its surroundings.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://skift.com/wp-content/uploads/2023/07/pexels-editz-central-editors-17117853-scaled-e1690273158715.jpg"
        alt="Destination 3"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Japan, Mount Fuji</h5>
        <p className="text-gray-700 text-base">
          Explore the serene beauty of Mount Fuji and immerse yourself in Japanese culture.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://indiaoutbound.info/wp-content/uploads/2020/02/tourism.jpg"
        alt="Destination 4"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Santorini, Greece</h5>
        <p className="text-gray-700 text-base">
          Fira, perched on the cliffs of Santorini, Greece, is absolutely breathtaking. The contrast of the iconic
          whitewashed buildings with blue domes against the deep blue Aegean Sea is unreal — like a postcard come to life.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://wallpaperaccess.com/full/1386109.jpg"
        alt="Destination 1"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Canada, Gananoque Island</h5>
        <p className="text-gray-700 text-base">
          Far far away, behind the word mountains, far from the countries of Chaos, there live the blind texts.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
        alt="Destination 2"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">France, Eiffel Tower</h5>
        <p className="text-gray-700 text-base">
          Experience the beauty of Paris with a visit to the iconic Eiffel Tower and its surroundings.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://skift.com/wp-content/uploads/2023/07/pexels-editz-central-editors-17117853-scaled-e1690273158715.jpg"
        alt="Destination 3"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Japan, Mount Fuji</h5>
        <p className="text-gray-700 text-base">
          Explore the serene beauty of Mount Fuji and immerse yourself in Japanese culture.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://indiaoutbound.info/wp-content/uploads/2020/02/tourism.jpg"
        alt="Destination 4"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Santorini, Greece</h5>
        <p className="text-gray-700 text-base">
          Fira, perched on the cliffs of Santorini, Greece, is absolutely breathtaking. The contrast of the iconic
          whitewashed buildings with blue domes against the deep blue Aegean Sea is unreal — like a postcard come to life.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
<Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={5}
  slidesPerView={3}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://wallpaperaccess.com/full/1386109.jpg"
        alt="Destination 1"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Canada, Gananoque Island</h5>
        <p className="text-gray-700 text-base">
          Far far away, behind the word mountains, far from the countries of Chaos, there live the blind texts.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
        alt="Destination 2"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">France, Eiffel Tower</h5>
        <p className="text-gray-700 text-base">
          Experience the beauty of Paris with a visit to the iconic Eiffel Tower and its surroundings.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://skift.com/wp-content/uploads/2023/07/pexels-editz-central-editors-17117853-scaled-e1690273158715.jpg"
        alt="Destination 3"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Japan, Mount Fuji</h5>
        <p className="text-gray-700 text-base">
          Explore the serene beauty of Mount Fuji and immerse yourself in Japanese culture.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://indiaoutbound.info/wp-content/uploads/2020/02/tourism.jpg"
        alt="Destination 4"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Santorini, Greece</h5>
        <p className="text-gray-700 text-base">
          Fira, perched on the cliffs of Santorini, Greece, is absolutely breathtaking. The contrast of the iconic
          whitewashed buildings with blue domes against the deep blue Aegean Sea is unreal — like a postcard come to life.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://wallpaperaccess.com/full/1386109.jpg"
        alt="Destination 1"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Canada, Gananoque Island</h5>
        <p className="text-gray-700 text-base">
          Far far away, behind the word mountains, far from the countries of Chaos, there live the blind texts.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg"
        alt="Destination 2"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">France, Eiffel Tower</h5>
        <p className="text-gray-700 text-base">
          Experience the beauty of Paris with a visit to the iconic Eiffel Tower and its surroundings.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://skift.com/wp-content/uploads/2023/07/pexels-editz-central-editors-17117853-scaled-e1690273158715.jpg"
        alt="Destination 3"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Japan, Mount Fuji</h5>
        <p className="text-gray-700 text-base">
          Explore the serene beauty of Mount Fuji and immerse yourself in Japanese culture.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide>
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src="https://indiaoutbound.info/wp-content/uploads/2020/02/tourism.jpg"
        alt="Destination 4"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">Santorini, Greece</h5>
        <p className="text-gray-700 text-base">
          Fira, perched on the cliffs of Santorini, Greece, is absolutely breathtaking. The contrast of the iconic
          whitewashed buildings with blue domes against the deep blue Aegean Sea is unreal — like a postcard come to life.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-4">
          Share
        </button>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
</div>
</div>
    
  );
};

export default Home;