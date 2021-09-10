import { useState } from "react";

import Header from "../partials/Header";
import PricingTables from "../partials/PricingTables";

function ResumePage() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='flex-grow'>
        <section className='relative'>
          {/* Illustration behind content */}
          <div
            className='absolute left-1/2 transform -translate-x-1/2 -mb-64 bottom-0 pointer-events-none -z-1'
            aria-hidden='true'
          >
            <svg
              width='1360'
              height='578'
              viewBox='0 0 1360 578'
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs>
                <linearGradient
                  x1='50%'
                  y1='0%'
                  x2='50%'
                  y2='100%'
                  id='illustration-01'
                >
                  <stop stopColor='#FFF' offset='0%' />
                  <stop stopColor='#EAEAEA' offset='77.402%' />
                  <stop stopColor='#DFDFDF' offset='100%' />
                </linearGradient>
              </defs>
              <g fill='url(#illustration-01)' fillRule='evenodd'>
                <circle cx='1200' cy='300' r='128' />
                <circle cx='85' cy='443' r='64' />
                <circle cx='165' cy='70' r='64' />
              </g>
            </svg>
          </div>

          <div className='flex flex-grow max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='flex flex-grow pt-32 pb-12 md:pt-40 md:pb-20'>
              <div className='max-w-3xl mx-auto text-center'>
                {/* 404 content */}
                <h1 className='flex flex-grow h1 mb-4'>My Resume</h1>

                <div className='flex-grow bg-transparent'>
                  <div>
                    <span className='text-gray-600'>By </span>
                    <a className='font-medium hover:underline' href='#0'>
                      Micheal Calendo
                    </a>
                    <span className='text-purple-600 font-semibold'>
                      {" "}
                      · September 9th, 2021
                    </span>
                  </div>

                  <div className='flex flex-grow bg-gray-900'>
                    _33333333333333333333333333333333333333333333333333;_
                  </div>

                  <div className='resume-form-container'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;
