import avatar from '../../../public/img/amir.png';
import Title from '../Title';

import Image from 'next/image';

const contents = [
  `Hello World! My name is Muhammad Amir, a Production Operator, Technician, Automotive Engineer, Gabuters Developer, and AOSP/Linux Kernel Enthusiast. I was born and raised in Bekasi, Indonesia October 9, 2002. With hands-on experience as a Production Operator and in Motorcycle Automotive Engineering, I have built a strong foundation in both manufacturing processes and technical problem-solving. I am passionate about pursuing a career in the manufacturing industry, driven by my curiosity for technology and continuous improvement. I enjoy adapting to new challenges, learning technical skills, and applying innovative solutions to real-world problems.`,
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