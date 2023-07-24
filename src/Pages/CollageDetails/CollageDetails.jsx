import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollageDetails = () => {

  const collageData = useLoaderData();
  const { college_name, collage_image, admission_date, events, research_history, sports } = collageData



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src=
        {collage_image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p className='text-orange-500'>Admission Date:  <span className='font-semibold text-slate-400'>     {admission_date}</span></p>
        <p>Research History: {research_history}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CollageDetails;