import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollageDetails = () => {

  const collageData = useLoaderData();
  const { college_name, collage_image, admission_date, events, research_history, sports } = collageData



  return (
    <div className="card w-96 bg-base-100 shadow-xl md: mx-auto md:my-20">
      <figure><img src=
        {collage_image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p className='text-orange-500'>Admission Date:  <span className='font-semibold text-slate-400'>     {admission_date}</span></p>
        <p>Research History: {research_history}</p>
        <p>Events: {events}</p>
        <p>Sports : {sports}</p>

      </div>
    </div>
  );
};

export default CollageDetails;