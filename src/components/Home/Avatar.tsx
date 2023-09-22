'use client';

import Image from 'next/image';

const Avatar = () => {

  return (
    <div>
      <Image
        src='/img/amir-formal.png'
        alt='amir formal'
        className='w-64 h-64 md:h-auto'
        width={300}
        height={300}
        priority
      />
    </div>
  );
};

export default Avatar;
