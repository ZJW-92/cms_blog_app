import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';



const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  
  return (
    <div className="container mx-auto px-10 mb-10"> 
      <div className="w-full inline-block py-10">
        <div className="md:float-left block">
          <Link href="/"> 
            <span className="cursor-pointer font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-300">Optimal Recipe Blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-4 text-white ml-6 text-xl font-bold cursor-pointer ">
              {category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
