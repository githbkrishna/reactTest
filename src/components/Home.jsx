import React from 'react'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import office from '../assets/office.jpg'

const Home = () => {
  return (
    <section className='flex items-center justify-center'>
        <div className='w-4/12'>
           <h2 className='italic font-bold'>explore your <span className='text-cyan'>hobby</span> or <span>passion</span> </h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dignissimos voluptatibus praesentium.</p>
           <img src={{office}} alt="" />
        </div>
        <div className='w-4/12'>
            <div className='flex items-center justify-start gap-5 my-2'>
                <h2 className='capitalize text-purple-900 font-bold'>Sign in</h2>
                <h2 className='capitalize font-bold'>Join in</h2>
            </div>
            <div className='border-solid border-2 border-black rounded-lg py-2'>
                <img src={{google}} alt="" />
                <span>continue with google</span>
            </div>
            <div className='border-solid border-2 border-black rounded-lg py-2'>
                <img src={{facebook}} alt="" className='w-[2rem]' />
                <span>continue with google</span>
            </div>
        </div>
    </section>
  )
}

export default Home