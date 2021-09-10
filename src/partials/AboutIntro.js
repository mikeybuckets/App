import React from "react";

function AboutIntro() {
  return (
    <section className='bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900'>
        <div className='pt-16 pb-12 md:pt-15 md:pb-10'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center'>
            <h1
              className='text-white text-6xl mx-auto md:text-6xl md:mx-10 font-extrabold leading-tighter tracking-tighter'
              data-aos='zoom-y-out'
            >
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-700 myx-auto'>
                From a great family in...
              </h1>
              <span>the Valley, Arizona</span>
            </h1>
            <div>
              <img
                className='rounded shadow-2xl item-center my-10 py-0 px-12 mxy-auto'
                src={require("../images/sun-fog-43.png").default}
                alt='About us'
              />
            </div>

            <div className='flex justify-center items-start'>
              <img
                className='rounded shadow-2xl mxy-auto'
                src={require("../images/the-family.jpg").default}
                alt='About us'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
