import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className='p-4 bg-[#0c9869] md:px-6 md:py-8'>
      <div class='sm:flex sm:items-center sm:justify-between'>
        <a href='https://flowbite.com/' class='flex items-center mb-4 sm:mb-0'>
          <span className='text-white font-[Consolas] text-2xl tracking-[.25em]'>Sangmin Kim</span>
        </a>
        <ul class='flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400'>
          <li>
              <Link to='about' class='mr-4 hover:underline md:mr-6' smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to='#' class='mr-4 hover:underline md:mr-6' smooth={true} duration={500}>Privacy Policy</Link>
          </li>
          <li>
            <Link to='#' class='mr-4 hover:underline md:mr-6' smooth={true} duration={500}>Licensing</Link>
          </li>
          <li>
            <Link to='contact' className='mr-4 hover:underline md:mr-6' smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
      <hr class='my-6 border-gray-200 sm:mx-auto lg:my-8' />
      <span class='block text-sm text-white sm:text-center'>© 2022 Sangmin Kim. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer