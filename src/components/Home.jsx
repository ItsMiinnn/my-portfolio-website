import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>

      {/* Content */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0c9869]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-600'>Sangmin Kim</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>I'm a Software Developer</h2>
        <p className='text-gray-800 py-4 max-w-[700px]'>I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building java applications and web applications on the side.
        </p>
        <div>
          <button className='text-[#0c9869] font-bold group border-[#0c9869] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0c9869] hover:border-[#0c9869] hover:text-white'>
          <Link to='projects' smooth={true} duration={500}>View Projects </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowRight className='ml-3'/>
            </span>  
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home