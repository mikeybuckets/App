import React from "react";

function AboutIntro() {
  return (
    <section className='bg-gray-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h1
              className='text-white text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4'
              data-aos='zoom-y-out'
            >
              Get to know Mike{" "}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-700'>
                I was born in Mesa Az
              </span>
            </h1>
            <div className='flex row title-container justify-center'>
              <h5 className='relative xt-xl text-gray-600'>
                I was born in Mesa Az...
                <img
                  className='rounded shadow-2xl item-center mxy-auto'
                  src={require("../images/sun-fog-43.png").default}
                  alt='About us'
                />
                I come from a great family!
              </h5>
            </div>
          </div>

          <figure className='flex justify-center items-start'>
            <img
              className='rounded shadow-2xl mxy-auto'
              src={require("../images/the-family.jpg").default}
              alt='About us'
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
