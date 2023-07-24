import React from 'react';
import useCollage from '../../hooks/useCollage';
import SingleCollage from '../SingleCollage/SingleCollage';

const Collage = () => {

  const [collages] = useCollage();
  // console.log(collages);


  return (
    <div className='md:my-20 md:mb-32
    
    '>
      <h1 className='text-3xl text-center md:pb-5'>Choose Collage <span className='text-orange-500 font-semibold'>You Like Most</span></h1>

      <div className='grid md:grid-cols-3 pt-5 md:gap-20'>
        {
          collages.map(collage => <SingleCollage

            key={collage._id}
            collage={collage}
          ></SingleCollage>)
        }
      </div>


    </div>
  );
};

export default Collage;