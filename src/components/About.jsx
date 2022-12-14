import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full sm:h-screen text-gray-800 px-4 pb-4 min-w-[320px]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#0c9869]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className=''>Hi. I'm Min, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>A software developer that craves for one’s development
              and can contribute one’s skills and abilities to
              the growth of the organization and one’s self. Also, looking to
              leverage analytical skills, coding skills, and leadership skills</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About