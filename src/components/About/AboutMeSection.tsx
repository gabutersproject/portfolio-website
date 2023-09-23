import avatar from '../../../public/img/amir.png';
import Title from '../Title';

import Image from 'next/image';

const contents = [
  `Hello world!, My name is Muhammad Amir. I'm a Production Operator, Technician, Automotive Engineering, Gabuters Developer, and AOSP/Linux Kernel Enthusiast. I live in Bekasi, Indonesia. I was born in Bekasi on October 9, 2002 (21 years old).`,
  `I have experience as a Production Operator. I have an interest in a career in a manufacturing company. I am a person who has a high willingness to learn, adapt to change and also enjoy learning technical things.`,
];

const AboutMeSection = () => {
  return (
    <div className='flex flex-col-reverse gap-8 md:flex-row md:gap-16'>
      <div className='space-y-4 md:w-4/6'>
        <Title>About Me</Title>
        {contents.map((content) => (
          <p
            className='text-justify dark:text-gray-200 text-light-fg-secondary'
            key={content}
          >
            {content}
          </p>
        ))}
      </div>
      <div className='pt-4 md:pr-6 md:w-2/6'>
        <Image
          src={avatar}
          alt='My photo'
          height={256}
          width={256}
          className='mx-auto w-64 h-auto rounded-full'
          priority
          sizes='(max-width: 768px) 256px, (max-width: 1200px) 224px, 256px'
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
