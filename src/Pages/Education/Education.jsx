import React from 'react';
import { FaBook, FaBookReader, FaChalkboardTeacher, FaFutbol, FaGraduationCap, FaPeace } from 'react-icons/fa';

const Education = () => {
  return (
    <div className='grid md:grid-cols-3 md:gap-20 md:mb-40 md:mt-40'>
      <div className='md:flex md:gap-5 items-start hover:bg-slate-500 hover:text-white bg-slate-100 p-10 '>
        <div className='hover:text-white '>
          <FaBook className='text-2xl text-orange-500'></FaBook>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
      <div className='md:flex md:gap-5 items-start bg-slate-100 p-10 hover:bg-slate-500 hover:text-white bg-slate-100'>
        <div >
          <FaFutbol className='text-2xl text-orange-500'></FaFutbol>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2' >Sports & Games</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
      <div className='md:flex md:gap-5 items-start bg-slate-100 p-10 hover:bg-slate-500 hover:text-white bg-slate-100'>
        <div>
          <FaBookReader className='text-2xl  text-orange-500'></FaBookReader>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Easy to Learn</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
      <div className='md:flex md:gap-5 items-start bg-slate-100 p-10 hover:bg-slate-500 hover:text-white bg-slate-100'>
        <div>
          <FaChalkboardTeacher className='text-2xl text-orange-500'></FaChalkboardTeacher>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>FullFill Potential</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
      <div className='md:flex md:gap-5 items-start bg-slate-100 p-10 hover:bg-slate-500 hover:text-white bg-slate-100'>
        <div>
          <FaGraduationCap className=' text-orange-500 text-2xl'></FaGraduationCap>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Special Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
      <div className='md:flex md:gap-5 items-start bg-slate-100 p-10 hover:bg-slate-500 hover:text-white bg-slate-100'>
        <div>
          <FaPeace className='text-2xl text-orange-500'></FaPeace>
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Happy Environment</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a.</p>
        </div>
      </div>
    </div >
  );
};

export default Education;