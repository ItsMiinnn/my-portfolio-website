import React from 'react'

import AngularLogo from '../assets/skills/angular.png'
import AWSLogo from '../assets/skills/aws.png'
import CLogo from '../assets/skills/c.png'
import CSSLogo from '../assets/skills/css.png'
import FirebaseLogo from '../assets/skills/firebase.png'
import GitLogo from '../assets/skills/git.png'
import GithubLogo from '../assets/skills/github.png'
import HTMLLogo from '../assets/skills/html.png'
import JavaLogo from '../assets/skills/java.png'
import JavascriptLogo from '../assets/skills/javascript.png'
import MongoLogo from '../assets/skills/mongo.png'
import NodeLogo from '../assets/skills/node.png'
import PythonLogo from '../assets/skills/python.png'
import ReactLogo from '../assets/skills/react.png'
import SpringLogo from '../assets/skills/spring.png'
import TailwindLogo from '../assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaLogo} alt="HTML icon" />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavascriptLogo} alt="HTML icon" />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PythonLogo} alt="HTML icon" />
            <p className='my-4'>Python</p>
          </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CLogo} alt="HTML icon" />
            <p className='my-4'>C</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTMLLogo} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSSLogo} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={SpringLogo} alt="HTML icon" />
            <p className='my-4'>Spring</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AngularLogo} alt="HTML icon" />
            <p className='my-4'>Angular</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt="HTML icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={NodeLogo} alt="HTML icon" />
            <p className='my-4'>Node.js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailwindLogo} alt="HTML icon" />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitLogo} alt="HTML icon" />
            <p className='my-4'>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills