import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg lg:p-8 mb-10">

    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={post.featuredImage.url} alt="" 
      className="object-top absolute h-70 w-full rounded-lg lg:rounded-lg" />
    </div>

    <h1 className="text-center mb-6 cursor-pointer hover:text-pink-500 text-3xl font-bold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>

    <div className="lg:flex text-center  justify-center mb-6 w-full">
      <div className="flex lg:w-auto mr-8 items-center">
        <Image
         unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="32px"
          width="32px"
          src={post.author.photo.url}/>
        <p className=" text-gray-600 ml-2 font-medium text-lg">
          {post.author.name}</p>
      </div>

      <div className="font-medium text-gray-600">
        <svg className="h-6 w-6 inline mr-2 text-pink-500" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-600 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}</p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className=" duration-300 transform 
        hover:-translate-y-1 inline-block bg-pink-600 text-medium font-medium rounded-full 
        text-white px-6 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
