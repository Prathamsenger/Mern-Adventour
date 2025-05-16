import React from 'react'
import PlaceAutocompleteElement from "react-google-autocomplete";


const Country = () => {
  return (
   <div className='sm:px-10 md:px-32 lg-px-56 xl:px-10 px-5 mt-10'>
<h2 className='font-bond text-3xl'>Tell us your travelling preferences</h2>
<p className='mt-3 text-gray-500 text-xl'>Just provide basic information about destination, and out trip planner will generate a customized itinerray based on your preferences. </p>
   
   <div className='mt-20 '>
   <div><h2 className='text-xl my-3 font-medium '>Destination of your choice?</h2>
  <PlaceAutocompleteElement
  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
  onPlaceSelected={(place) => {
    console.log(place);
  }}
  />
   </div>
   </div>
   
   </div>


  )
}

export default Country
