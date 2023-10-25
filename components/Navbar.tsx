import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const navIcons = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/black-heart.svg",
    alt: "black-heart",
  },
  {
    src: "/assets/icons/user.svg",
    alt: "user",
  },
];
function Navbar() {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='assets/icons/logo.svg' width={27} height={27} alt='logo'/>
          <p className='nav-logo'>
            SaveOn<span className='text-primary'>Shop</span>
          </p>
        </Link>
        <div className='flex items-center gap-5'>
          {
            navIcons.map((icon)=>(
              <Image src={icon.src} key={icon.alt} alt = {icon.alt} width={28} height={28} className='object-contain'/>
            ))
          }
        </div>
      </nav>

    </header>
  )
}

export default Navbar