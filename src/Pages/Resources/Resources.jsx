import React from 'react';

const Resources = () => {
  return (
    <div className='text-center mb-20'>
      <h2 className='text-5xl font-semibold'>Resources built with you in mind</h2>
      <p className=' px-5 text-xl text-center mx-auto mt-10'>
        College Choice offers numerous free online resources to help you in your college search, including our unique student-centered college rankings, admissions advice, scholarship and financial aid information, and much much more.
      </p>
      <div className="mt-10">
        <div className='grid md:grid-cols-4 gap-10'>


          <div className=" card w-56 bg-white pt-10 drop-shadow-lg">
            <figure><img className='w-2/5' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664377548/CollegeChoice.net/rankings_81799191c6/rankings_81799191c6.svg?_i=AA" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">Rankings</h2>

            </div>
          </div>

          <div className=" card w-56 bg-white pt-10 drop-shadow-lg">
            <figure><img className='w-2/5' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664377550/CollegeChoice.net/degrees_817986d111/degrees_817986d111.svg?_i=AA" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title mx-auto mt-5">Degrees</h2>

            </div>
          </div>
          <div className=" card w-56 bg-white pt-10 drop-shadow-lg">
            <figure><img className='w-2/5' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664377542/CollegeChoice.net/states_81801c4e50/states_81801c4e50.svg?_i=AA" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">States</h2>

            </div>
          </div>
          <div className=" card w-56 bg-white pt-10 drop-shadow-lg">
            <figure><img className='w-2/5' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664377551/CollegeChoice.net/careers_8179730368/careers_8179730368.svg?_i=AA" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title mx-auto mt-6">Careers</h2>

            </div>
          </div>
          <div className=" card w-56 bg-white pt-10 drop-shadow-lg">
            <figure><img className='w-2/5' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1664377545/CollegeChoice.net/resources_81800b2ec3/resources_81800b2ec3.svg?_i=AA" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">Resources</h2>

            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Resources;