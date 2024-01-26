'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import wolf from '../public/wolf-hero.jpg';
import { Swap } from '@/components/Swap';
import HamburgerMenu from '@/components/HamburgerMenu';
import ModalMenu from '@/components/ModalMenu';
import { links } from '@/utils/links';
import { skils } from '@/utils/skils';

export const skilsStyle = {
  skils: ' lg:text-[30px] leading-[30px] text-orange-action pr-4 ',
};

interface IFormInput {
  firstName: string;
  label: string;
  type: string;
}

export default function Home() {
  //form handlaing

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      title: '',
      message: '',
      label: '',
      type: 'email',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  // handle toggle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('otwarte');
  };

  return (
    <main className='container mx-auto py-[20px] sm:py-[50px] bg-dark-bg'>
      <header className='grid grid-cols-2 grid-rows-2 gap-1'>
        <h2 className=' text-[30px] ml-[35px] col-span-1 self-center bg-orange-action bg-clip-text text-transparent'>
          Web & Wolf
        </h2>
        <nav className='hidden lg:text-xl sm:block pt-[5px] mr-[35px] col-span-1 justify-self-end'>
          <ul className='flex gap-x-9 '>
           {links.map((link)=><li key={link.label}><Link href={link.href}></Link>{link.label}</li>)}
          </ul>
        </nav>
        <div className='basis-2/5 mr-[35px] flex flex-col gap-2  items-end pt-[5px] sm:hidden'>
          <HamburgerMenu handleToggleMenu={handleToggleMenu} />
        </div>
        {!isMenuOpen && (
          <div className='mr-[45px] col-start-2 justify-self-end self-center'>
            <Swap />
          </div>
        )}
        {isMenuOpen && (
          <div className='w-[100vw] mt-[20px]'>
            <ModalMenu />
          </div>
        )}
      </header>

      {/* hero section */}
      <section className='flex flex-col justify-between mt-10 sm:px-[32px] md:flex-row md:px[48]'>
        <div className='px-[20px] pt-16 flex flex-1 flex-col items-center'>
          <h1 className='flex justify-center text-4xl text-slate-200 leading-10 '>
            Hi, I am LOREM ipsum  
            <br />
            lorem ipsum Developer
          </h1>
          <div className='flex justify-center md:max-lg:flex-col'>
            <Link
              href='#'
              className=' flex items-center  justify-center md:w-[182px] h-[50px] bg-orange-action rounded-lg mt-8  m-4 w-[150px] md:h-[40px] '
            >
              My Projcts
            </Link>
            <Link
              href='#'
              className=' flex items-center  justify-center md:w-[182px] h-[50px] bg-purple-action rounded-lg mt-8  m-4 w-[150px] md:h-[40px] '
            >
              My Resume
            </Link>
          </div>
        </div>
        <div className='py-8 md:w-[40%] '>
          <Image
            src={wolf}
            alt='wolf'
            placeholder='blur'
            className='w-full mb-5'
          />
          <q className='py-6 mx-5 text-lg'>
            The gaze of the wolf reaches into our soul
          </q>
          <p className='mx-9'>Barry Lopez</p>
        </div>
      </section>

      {/* About me section */}
      <section className=" bg-[url(/slice7.png)] bg-cover w-full h-auto  sm:px-[35px] lg-h-[600px] lg:grid lg:grid-rows-[100px_300px_auto] lg:grid-cols-2 font-['Inter'] pt-8 ">
        <h3 className='py-4 text-3xl text-center lg:h-[100px] lg:col-span-2 lg: lg:text-[30px]'>
          About me
        </h3>
        <Image
          src='/creative-man.png'
          alt='creative image'
          width={250}
          height={310}
          className='ml-[75px] hidden lg:block lg:row-span-2 drop-shadow-[0_0_2px_white,0_0_3px_white]'
          // filter: drop-shadow(0 0 2px white) drop-shadow(0 0 3px white) drop-shadow(0 0 35px #5d676f);
        />
        <div className='sd:w-[510px] sd:h-[240px] mx-auto mb-unit-3'>
          <p className='text-base lg:text-2xl text-center px-4'>
            Front-end developer with over two years of commercial experience. My
            main stack is React along with TypeScript and Next js. I enjoy
            exploring the React ecosystem and learning new technologies
          </p>
        </div>
        <div className=' flex flex-wrap px-[35px] py-4 lg:col-span-2'>
        
          {skils.map((skil)=> <span key={skil.id} className={` ${skilsStyle.skils}`}>{skil.name}</span>)}


          <span className={`text-[28px] ${skilsStyle.skils}`}>Html</span>
          <span className={`${skilsStyle.skils}`}>Scss</span>
          <span className={`text-[24px] ${skilsStyle.skils}`}>JavaScript</span>
          <span className={`text-[24px] ${skilsStyle.skils}`}>TypeScript</span>
          <span className={`text-[24px] ${skilsStyle.skils}`}>React</span>
          <span className={`text-[24px] ${skilsStyle.skils}`}>Next.js </span>
          <span className={`${skilsStyle.skils}`}>Redux</span>
          <span className={`${skilsStyle.skils}`}>Styled Components</span>
          <span className={`${skilsStyle.skils}`}>Redux Toolkit</span>
          <span className={`text-[24px] ${skilsStyle.skils}`}>Tailwind</span>
          <span className={`${skilsStyle.skils}`}>NextUI</span>
          <span className={`${skilsStyle.skils}`}>MaterialUI</span>
          <span className={`${skilsStyle.skils}`}>TanStack Query</span>
          <span className={`${skilsStyle.skils}`}>React Hook Form</span>
          <span className={`${skilsStyle.skils}`}>GraphQl</span>
          <span className={`${skilsStyle.skils}`}>Apollo Client</span>
          <span className={`${skilsStyle.skils}`}>Git</span>
          <span className={`${skilsStyle.skils}`}>Figma</span>
          <span className={`${skilsStyle.skils}`}>Storybook</span>
          <span className={`${skilsStyle.skils}`}>DatoCms</span>
        </div>
      </section>

      {/* Projects section  */}
      <section className='px-[75px] pt-8 '>
        <h3 className='pt-6 text-3xl text-center'>Projects</h3>
        {/* projects carts */}
        <div className='flex flex-col items-center justify-center sm:justify-between py-[30px]'>
          {/* project cart */}
          <div className='w-[100vw] sm:w-[480px] h-auto mx-auto  bg-light-bg'>
            <h4 className='mt-3 ml-4 text-orange-action'>Shopping App</h4>
            {/* <div className="bg-[url(/store-project.png)] bg-no-repeat rotate-[15deg] -z-50 overflow-hidden bg-contain bg-center w-[430px] h-[350px]"></div> */}
            <Image
              src='/store-project.png'
              alt=''
              width={430}
              height={350}
              className='p-4   md:w-[430px] md:h-[350px] mt-4 mx-auto'
            />
            <div className='flex justify-center gap-6 pt-4 pb-6'>
              <Link
                href='https://weblukas.github.io/react-store'
                target='_blank'
                className='  inline-block w-[120px] h-[32px] bg-orange-action rounded-lg  text-center leading-[32px]'
              >
                Live
              </Link>
              <Link
                href='https://github.com/weblukas/react-store'
                target='_blank'
                className=' inline-block w-[120px] h-[32px] z-40 bg-purple-action rounded-lg  text-center leading-[32px]'
              >
                Code
              </Link>
            </div>
          </div>
          {/* project cart 2*/}
          <div className=' w-[100vw] sm:w-[480px] h-auto mx-auto  bg-light-bg'>
            <h4 className='mt-3 ml-4 text-orange-action'>Imperator drązka</h4>
            <div className=''>
              {/* relative w-[100%] max-w-[400px] aspect-auto */}
              <Image
                src='/imperator-screen.png'
                alt=''
                width={1430}
                height={350}
                className='p-4  mt-4 mx-auto w-  '
                // w-[330px]  md:w-[430px] md:h-[350px]
              />
            </div>
            <div className='flex justify-center gap-6 pt-4 pb-6'>
              <Link
                href='#'
                className='  inline-block w-[120px] h-[32px] bg-orange-action rounded-lg  text-center leading-[32px]'
              >
                Live
              </Link>
              <Link
                href='#'
                className=' inline-block w-[120px] h-[32px] z-40 bg-purple-action rounded-lg  text-center leading-[32px]'
              >
                Code
              </Link>
            </div>
          </div>

          <Image
            src='/creative-work.png'
            alt='men at work'
            width={419}
            height={419}
            className='hidden lg:block'
          />
        </div>
        {/* <Link href='#' className=' text-orange-action '>
            More Projects
          </Link> */}
      </section>

      {/* Contact section */}
      <section>
        <h3 className='pt-6 text-3xl text-center'>Contact</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-light-bg rounded-lg flex flex-col items-center'
          // className="mx-auto pt-[100px] max-w-[740px] h-[550px] mt-9 bg-gradient-to-b from-[#E6533C] to-purple-action/60 rounded-lg flex flex-col items-center"
        >
          <Controller
            name='firstName'
            control={control}
            render={({ field }) => (
              <div className='w-[60%] py-3 '>
                <input
                  {...field}
                  type='text'
                  placeholder='Name'
                  className='w-full input input-bordered bg-dark-bg'
                />
              </div>
            )}
          />
          <Controller
            name='title'
            control={control}
            render={({ field }) => (
              <div className='w-[60%] py-3 '>
                <input
                  {...field}
                  type='text'
                  placeholder='Title'
                  className='w-full input input-bordered bg-dark-bg'
                />
              </div>
            )}
          />
          <Controller
            name='message'
            control={control}
            render={({ field }) => (
              <div className='w-[60%] py-3 '>
                <textarea
                  {...field}
                  placeholder='Message'
                  className='w-full textarea bg-dark-bg textarea-bordered textarea-lg'
                ></textarea>
              </div>
            )}
          />

          <input
            type='submit'
            aria-label='submit'
            className='bg-orange-action rounded-lg mt-8 text-center leading-[50px] inline-block w-[152px] h-[50px]'
          />
        </form>
      </section>
    </main>
  );
}
