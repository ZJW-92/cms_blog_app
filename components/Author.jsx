import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-10 mb-10 p-14 relative rounded-lg bg-white bg-opacity-80">
    <div className="absolute left-0 right-0 -top-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-black mt-6 mb-4 text-2xl font-bold">{author.name}</h3>
    <p className="text-black text-medium">{author.bio}</p>
  </div>
);

export default Author;
