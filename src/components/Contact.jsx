import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/f24c8eaa-d519-43ba-841c-1b6096d4d1c7' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below</p>
        </div>
        <input className='bg-[#ccd6f] p-2' type='text' placeholder='Input your name' name='name' />
        <input className='bg-[#ccd6f] p-2 my-4' type='email' placeholder='Input Your email' name='email' />
        <textarea className='bg-[#ccd6f] p-2' name='message' rows='10' placeholder='Input your message' />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Get in touch</button>
      </form>
    </div>
  )
}

export default Contact