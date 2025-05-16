import * as React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroImages from '../components/HeroImages';
import Services from '../components/Services';
import Top from '../components/Top';
import Booking from '../components/Booking';


const Home = () => {
  return (

    <div className="min-h-screen bg-white-50 text-white">
          <HeroImages/>
          <Services/>
          <Top/>
          <Booking/>

          
          
</div>
  )}

export default Home;