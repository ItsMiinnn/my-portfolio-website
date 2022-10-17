import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/footerlogo.png'

function Footer() {
  return (
    <footer className='p-4 bg-[#0c9869] md:px-6 md:py-8'>
      <div class='sm:flex sm:items-center sm:justify-between'>
        <a href='https://flowbite.com/' class='flex items-center mb-4 sm:mb-0 justify-center'>
          <img src={Logo} alt="Logo image" className='w-[200px] px-[5px]' />
        </a>
        <ul class='flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400 justify-between'>
          <li>
              <Link to='about' class='hover:underline' smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to='#' class=' hover:underline' smooth={true} duration={500}>Privacy Policy</Link>
          </li>
          <li>
            <Link to='#' class='hover:underline' smooth={true} duration={500}>Licensing</Link>
          </li>
          <li>
            <Link to='contact' className='hover:underline' smooth={true} duration={500}>Contact</Link>
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