import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollage = ({ collage }) => {

  console.log(collage);
  const { _id, college_name, collage_image
  } = collage
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img className='w-[500px] h-[250px]' src={collage_image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>

        <div className="card-actions justify-end">
          <Link to={`/collagedetails/${_id}`} className="btn btn-sm bg-orange-600 text-black hover:text-black hover:bg-slate-300 mt-5">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCollage;