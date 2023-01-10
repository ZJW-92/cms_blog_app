import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  
  return (
    <div className="bg-white rounded-lg p-8 pb-8 mb-8">
      <h3 className="text-2xl mb-4 font-bold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}</h3>
      
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-12 flex-none">
            
            <Image
            unoptimized
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}/>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-s">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
