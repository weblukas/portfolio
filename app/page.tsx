'use client';
import { useState } from 'react';
import Image from 'next/image';
import Snowfall from 'react-snowfall';
import wolf from '../public/wolf-hero.jpg';
import Skills from '@/components/Skills';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import TextEffect from '@/components/TextEffect';

function App() {
  const [theme, setTheme] = useState(false);
  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <div className={`${theme && 'dark'} relative`}>
      <main className='container mx-auto max-w-[1240px] py-[20px] sm:py-[30px] bg-gray-50 text-black dark:bg-dark-bg dark:text-slate-200'>
        {/* Hero Section */}
        <section className='flex flex-col lg:gap-20 justify-between mt-10 sm:px-10 md:flex-row md:px[48] lg:px-20'>
          <div className='px-[20px] flex flex-col pt-[60px] md:items-start lg:pt-22 lg:px-0 items-center'>
            <div className='flex items-end'>
              <TextEffect
                word='H'
                className='inline-block text-[80px] leading-[40px]'
              />
              <TextEffect word='ello' className='inline-block text-4xl' />
            </div>
            <h2 className='text-4xl dark:text-slate-200 mb-8 lg:text-[40px] lg:leading-[44px] text-center md:text-left'>
              <br /> I&apos;m Łukasz Szmyd
              <br />
              Front-end Developer
            </h2>
          </div>
          <div className='py-8 md:w-[40%] relative'>
            {/* Add Snowfall effect */}
            <Snowfall
              color='white' // Snowflake color
              snowflakeCount={100} // Number of snowflakes
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            />
            <Image
              src={wolf}
              alt='wolf'
              placeholder='blur'
              className='w-full mb-5 relative z-10' // Ensure the image is above the snow
            />
            <q className='py-6 text-lg px-4 sm:px-0'>
              The gaze of the wolf reaches into our soul
            </q>
            <p className='mx-9'>Barry Lopez</p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <section id='contact'>
          <h3 className='mt-16 text-3xl text-center'>Contact</h3>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
