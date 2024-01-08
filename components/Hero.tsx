"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

    const handleScroll = () => {

    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
             "Drive Your Dreams, Rent Your Reality."
            </h1>

            <p className='hero__subtitle'>
             Unlock Freedom with Our Rental Cars. Experience More, Pay Less: Rent Your Adventure Today!!
            </p>

            <CustomButton 
                title='Explore Cars'
                containerStyles='bg-secondary-orange text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/hero1.png' alt='hero' fill className='object-contain' />
             </div>
            
            <div className='hero__image-overlay' />
            
        </div>
    </div>
  )
}

export default Hero;
