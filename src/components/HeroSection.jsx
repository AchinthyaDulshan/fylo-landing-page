import React from 'react'
import HeroImage from '../assets/images/illustration-1.svg'
import UserEmailValidation from '../utils/UserEmailValidation.js';

const HeroSection = () => {

    const { email, setEmail, error, handleSubmit } = UserEmailValidation();

    return (
        <div className='max-w-7xl px-6 md:px-5 mx-auto grid md:grid-cols-2 items-center mb-20 lg:mb-20 md:my-16'>
            <div>
                {/* hero section heading  */}
                <h1 className='md:font-heading font-body font-bold lg:text-4xl text-2xl py-4 text-center md:text-left text-Very-Dark-Blue'>All your files in one secure location, accessible anywhere.</h1>
                {/* Hero section text  */}
                <p className='font-body text-center md:text-left text-Desaturated-Blue'>  Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                {/* Hero section Email submit form  */}
                <div className=' py-4'>
                    <form method="get" className='flex flex-col md:flex-row gap-3' onSubmit={(e) => handleSubmit(e, () => console.log('Form submitted'))}>
                        <div className='flex flex-col'>
                            <input type="email" name="" id="" placeholder='Enter your email..' className='peer border border-neutral-700 rounded-md px-3 py-2 font-heading text-sm text-Very-Dark-Blue' onChange={(e) => setEmail(e.target.value)} value={email} required />
                            {error && (
                                <p className='text-red-500 text-sm mt-1 invisible'>{error}</p>
                            )}
                        </div>
                        <input type='submit' className='bg-Bright-Blue text-Light-Grayish-Blue font-heading font-bold px-10 py-2 rounded-md text-sm shadow-md hover:bg-opacity-70' value={"Get Started"} />
                    </form>
                </div>
            </div>
            {/* Hero section image start  */}
            <div className='order-first md:order-last'>
                <img src={HeroImage} alt="" />
            </div>
            {/* Hero section Image end  */}
        </div>
    )
}

export default HeroSection