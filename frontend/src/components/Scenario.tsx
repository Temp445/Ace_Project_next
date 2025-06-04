
import Image from 'next/image';
import React from 'react';
import cms from '../assets/CMS1.png'
import Link from 'next/link';


const Scenario = () => {


  return (
    <div className="flex w-full min-h-fit  items-center justify-center py-12 px-4 sm:px-6 lg:px-20 mt-2  ">
      <div className="bg-white rounded md:rounded-2xl shadow-xl w-full max-w-6xl p-4 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center md:items-start relative border border-sky-600">
        <div className='hidden w-2 h-32 inset-0 lg:flex  absolute bg-sky-600  rounded-r left-0 top-10'></div>
        <div className='hidden w-2 h-32  lg:flex  absolute bg-sky-600  rounded-l right-0 bottom-10'></div>

        <div className="lg:w-1/2 mb-6 md:mb-0 md:pr-8 order-2 lg:order-1">
          <h1 className="text-xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold mb-4 text-gray-800">
            ACE Calibration Management System
          </h1>
          <p className=" text-sm md:text-lg text-justify sm:text-xl lg:text-sm xl:text-xl text-gray-600 leading-relaxed md:mt-5">
            Imagine your next audit — no more paper trails, no more scrambling for certificates. 
            With <span className="font-semibold text-sky-800">ACE CMS</span>, everything you need is ready at a click, 
            and your auditors are impressed. Your team stays calm, focused, and confident that everything is in order.
          </p>
<div className='mt-5 md:mt-10'>
          <Link href="/BookDemo"  className='text-sm md:text-base mt-6 p-2 rounded bg-sky-600 text-white '>Book A Demo</Link>
</div>
        </div>

        <div className="mb-5 lg:w-1/2 order-1 md:mb-0 lg:order-2 md:pb-5">
     <Image src={cms} alt="cms" className='rounded-lg md:shadow-xl shadow-indigo-300' />
        </div>
      </div>
    </div>
  );
};

export default Scenario;
