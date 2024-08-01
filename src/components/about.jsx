import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate()

  return (
    <section className='w-full h-screen bg-[#1A1A1E] text-white overflow-auto'>
       <div className='p-10'>
        <button onClick={() => navigate(-1)}className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg ">
       <i className="ri-arrow-left-line"></i> Back
                        </button>
        </div>
         
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:text-center">
            <h2
              className="font-heading mb-4 bg-[#6556cd] text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              Why Choose Us?
            </h2>
            <p className="font-heading text-lg  mt-2 lg:text-2xl leading-8 font-semibold tracking-tight ">
              Experience Cinema Like Never Before
            </p>
            <p className="mt-4 max-w-2xl md:text-lg text-sm lg:mx-auto">
              We provide a seamless movie experience with cutting-edge technology and an extensive film library.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-[#6556cd]">
                    <i className="ri-film-line text-3xl text-white"></i>
                  </div>
                  <p className="font-heading ml-16  text-base   lg:text-2xl leading-6 font-bold text-white">Extensive Film Library</p>
                </dt>
                <dd className="mt-2 ml-16 lg:text-base text-sm text-gray-300">
                  Discover a wide range of films, from classic to contemporary, all in one place.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-[#6556cd]">
                    <i className="ri-play-circle-line text-3xl text-white"></i>
                  </div>
                  <p className="font-heading ml-16  text-base  lg:text-2xl leading-6 font-bold text-white">High-Quality Streaming</p>
                </dt>
                <dd className="mt-2 ml-16 lg:text-base text-sm text-gray-300">
                  Enjoy your favorite films in stunning HD with smooth and reliable streaming.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-[#6556cd]">
                    <i className="ri-user-line text-3xl text-white"></i>
                  </div>
                  <p className="font-heading ml-16  text-base  lg:text-2xl leading-6 font-bold text-white">User-Friendly Interface</p>
                </dt>
                <dd className="mt-2 ml-16 lg:text-base text-sm text-gray-300">
                  Navigate through our platform with ease thanks to a clean and intuitive interface.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-[#6556cd]">
                    <i className="ri-ticket-line text-3xl text-white"></i>
                  </div>
                  <p className="font-heading ml-16  text-base  lg:text-2xl leading-6 font-bold text-white">Affordable Pricing</p>
                </dt>
                <dd className="mt-2 ml-16 lg:text-base text-sm text-gray-300">
                  Access all our content at competitive rates without compromising on quality.
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
