import React from 'react'

const SignupSection = () => {
    return (
        <div className='bg-Desaturated-Blue py-16 px-6 md:px-5'>
            <div className='max-w-7xl mx-auto grid lg:grid-cols-2  text-Light-Grayish-Blue items-center text-center lg:text-left'>
                <div className='lg:w-4/5 w-full'>
                    <h1 className='font-heading font-bold lg:text-4xl text-xl py-4'>Get early access today</h1>
                    <p className='font-body'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>
                <div>
                    <form action="" method="get" className='grid gap-4 pt-6 lg:pt-0'>
                        <input type="email" name="" id="" placeholder='email@example.com' className='border rounded-md shadow-md px-4 py-2 lg:w-3/5 w-4/5 mx-auto lg:mx-0' />
                        <button className='bg-Bright-Blue text-Light-Grayish-Blue font-heading font-bold px-10 py-2 rounded-md text-sm shadow-md lg:w-fit w-4/5 mx-auto lg:mx-0 hover:bg-opacity-60'>Get Started For Free</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupSection