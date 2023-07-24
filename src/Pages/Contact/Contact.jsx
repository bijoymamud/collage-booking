import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='md:mb-32'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl font-semibold'>Contact <span className='text-orange-600'>Us</span></h2>
        <p className='mt-2 mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, consequuntur.</p>
      </div>

      <div className='flex gap-20'>
        <div className='w-1/2 md:grid grid-cols-3 md:mt-10 gap-10 '>
          <div className='text-center'>
            <FaLocationArrow className='text-3xl text-orange-500 mx-auto mt-2 '></FaLocationArrow>
            <h2 className='mt-2 text-xl font-semibold'>Institute Location</h2>
            <p>Streat-5/1, House-10, New Dellih, <br /> India-1215</p>
          </div>
          <div className='text-center'>
            <FaEnvelope className='text-3xl text-orange-500 mx-auto mt-2 '></FaEnvelope>
            <h2 className='mt-2 text-xl font-semibold'>Message Info</h2>
            <p>info@example.com</p>
          </div>
          <div className='text-center mx-auto'>
            <FaPhone className='text-3xl text-orange-500 mx-auto mt-2 '></FaPhone>
            <h2 className='mt-2 text-xl font-semibold'>Contact Us</h2>
            <p>+869-00563985</p>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='md:flex gap-12'>
            <input type="text" placeholder="Your Name" className="input  input-bordered input-accent  max-w-xs" />

            <input type="text" placeholder="info@gmail.com" className="input ms- input-bordered input-accent  max-w-xs" />
          </div>

          <input type="text" placeholder="Subject" className="input mt-2  input-bordered input-accent w-4/5 " /> <br />

          <textarea className="textarea mt-2 w-4/5 textarea-accent" placeholder="Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;