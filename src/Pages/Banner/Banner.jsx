import React from 'react';

const Banner = () => {
  return (
    <div className="hero h-[700px] md:mt-10" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/students-working-study-group_23-2149281148.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold"><span className='text-orange-500'>Education</span> <span className='text-white'>
            For Everyone</span></h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn bg-orange-500 text-white border-none">Find Collage</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;