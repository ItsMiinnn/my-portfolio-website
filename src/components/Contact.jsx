import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center px-8 py-4'>
      <form method='POST' action='https://getform.io/f/f24c8eaa-d519-43ba-841c-1b6096d4d1c7' className='flex flex-col max-w-[1000px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0c9869] text-gray-800'>Contact</p>
          <p className='text-gray-800 py-4'>Any inquiries fill the form below</p>
        </div>
        <input className='bg-[#ccd6f] p-2 border-gray-500 border-2' type='text' placeholder='Input your name' name='name' />
        <input className='bg-[#ccd6f] p-2 my-4 border-gray-500 border-2' type='email' placeholder='Input Your email' name='email' />
        <textarea className='bg-[#ccd6f] p-2 border-gray-500 border-2' name='message' rows='10' placeholder='Input your message' />
        <button className='text-[#0c9869] font-bold border-[#0c9869] border-2 hover:bg-[#0c9869] hover:border-[#0c9869] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact