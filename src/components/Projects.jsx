import React, { forwardRef } from 'react';

export const Projects = forwardRef((props, ref ) => {

  return(
    <section ref={ref}>
      <h1 className='text-3xl font-black mt-24 text-pallete-4'>Projects</h1>
      <p className='text-center w-full my-96 text-4xl font-black text-pallete-3'>Coming soon...</p>
    </section>
  )
});