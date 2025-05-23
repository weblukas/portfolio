import { FC } from 'react';
import Image from 'next/image';
interface CardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string;
  github?: string;
}

const ProjectCard: FC<CardProps> = ({
  id,
  name,
  image,
  description,
  url,
  github,
}) => {
  return (
    <div key={id} className='shadow-2xl card w-96 bg-light-bg lg:text-[18px] '>
      <figure>
        {/* <img src={image} alt="project screenshot" /> */}
        <Image
          className='w-full h-auto'
          src={image}
          width={300}
          height={300}
          alt='project screenshot'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-name'>{name}</h2>
        <p>{description}</p>
        <div className='justify-end card-actions'>
          <a
            href={url}
            target='_blank'
            className='link text-orange-action text-[20px] mr-6 relative group'
            aria-label='live link'
          >
            Live
            <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-orange-action transition-all duration-1000 group-hover:w-full'></span>
          </a>
          {github ? (
            <a
              href={github}
              target='_blank'
              className='text-white link text-[20px] relative group'
              aria-label='github link'
            >
              Code
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-1000 group-hover:w-full'></span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
