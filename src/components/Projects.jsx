import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
          <p className='py-6'>Here are some of my projects</p>
        </div>

        <div>
          <ul>
            <li className='pb-8'>
              <p className='text-2xl font-bold pb-3'>eRecommender System — 
                <span className='italic'>Software Engineering Project</span>
              </p>
              <p>- A student education skills assessment and information technology education (ITE) program recommender system.</p>
            </li>
            <li className='pb-8'>
              <p className='text-2xl font-bold pb-3'>Recognition of Classical Instruments in Polyphonic Music Through Convolutional Neural Networks — 
                <span className='italic'>Thesis Paper</span>
              </p>
              <p>- A system that uses convolutional neural networks in order to identify set of classical instruments found in a polyphonic music.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects