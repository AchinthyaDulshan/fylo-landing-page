import React from 'react'
import FeatureImage from '../assets/images/illustration-2.svg'
import ArrowIcon from '../assets/images/icon-arrow.svg'
import AvatarImage from '../assets/images/avatar-testimonial.jpg'

const FeaturesSection = () => {
    return (
        <div className='lg:py-24 md:py-16 featureSection px-6 md:px-5'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center'>
                <div>
                    <h1 className='font-heading font-bold lg:text-4xl py-4 text-center md:text-left text-lg'>Stay productive, wherever you are</h1>
                    <p className='font-body text-Desaturated-Blue'> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
                    <p className='font-body text-Desaturated-Blue py-4'> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required! </p>
                    <a className='flex items-center gap-2 text-Moderate-Cyan border-b-2 w-fit mx-auto md:mx-0' href="">See how Fylo works <img className='w-fit h-fit' src={ArrowIcon} alt="" /></a>
                    
                    <div className='bg-white p-8 my-10 rounded-lg shadow-lg lg:w-3/5 w-full'>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-34 -25)" fill="#07043B" fill-rule="evenodd" font-family="Helvetica" font-size="45"><tspan x="33" y="56">“</tspan></text></svg>
                        <p className='font-body py-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        <div className='flex items-center gap-4'>
                            <img className='rounded-full w-12' src={AvatarImage} alt="" />
                            <div>
                                <h4 className='font-body font-bold text-sm'>Kyle Burton</h4>
                                <p className='font-body text-xs'> Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-first md:order-last'>
                    <img src={FeatureImage} alt="" />
                </div>

            </div>
        </div>

    )
}

export default FeaturesSection