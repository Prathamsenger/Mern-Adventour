import React, { useState } from 'react';
import PlaceAutocompleteElement from "react-google-autocomplete";
import { SelectBudgetOption, SelectTravelesList } from '../components/options';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 

const Country = () => {
  const [place, setPlace] = useState();
  const [FromData, setForm] = useState();
  const inputStyle = {
    width: '100%',  
    height: '40px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travelling preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide basic information about destination, and out trip planner will generate a customized itinerray based on your preferences.
      </p>
      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium '>Destination of your choice?</h2>
          <PlaceAutocompleteElement
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            selectprops={{
              place,
              onChange:(v)=>{setPlace (v);console.log(v);
              }
            }}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            style={inputStyle} 
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium '>How many days are you planing for?</h2>
          <input placeholder = {'ex.3'} type="number" style={inputStyle} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className='text-xl my-3 font-medium '>What is your Budget?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOption.map((item, index) => (
            <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
              <h2 className='text-4xl flex justify-center items-center'>{item.icon}</h2>
              <h2 className='font-bold text-lg flex justify-center items-center'>{item.title}</h2>
              <h2 className='text-sm text-gray-500 flex justify-center items-center'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className='text-xl my-6 font-medium '>What do you plan on travelling with on your next adventure?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item, index) => (
            <div key={index} className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
              <h2 className='text-4xl flex justify-center items-center'>{item.icon}</h2>
              <h2 className='font-bold text-lg flex justify-center items-center'>{item.title}</h2>
              <h2 className='text-sm text-gray-500 flex justify-center items-center'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-12 flex justify-center"> 
        <Link
          to=""
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1"
        >
          <button >Generate trip</button>
        </Link>
      </div>
    </div>
  );
};

export default Country;