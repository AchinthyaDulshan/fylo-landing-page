import React from 'react'
import Logo from '../assets/images/logo.svg'

const NavBar = () => {
    return (
        <div className='w-full top-0 px-5 py-5 lg:px-10 lg:py-4 flex justify-between font-heading max-w-screen-2xl mx-auto'>
            <div>
                {/* brand logo  */}
                <img src={Logo} alt="logo" className='lg:w-28 w-20' />
            </div>
            <div className='flex lg:gap-4 gap-4 text-Desaturated-Blue text-sm lg:text-base'>
                {/* nav items  */}
                <a href="/">Features</a>
                <a href="/">Team</a>
                <a href="/">Sign In</a>
            </div>
        </div>
    )
}

export default NavBar