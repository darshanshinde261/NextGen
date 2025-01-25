import React, { useState, useEffect, useRef } from 'react';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import ProductList from './Productlist';
import Postdata from './Postdata';
import gsap from 'gsap';

const Home = () => {
  const [get, setGet] = useState(false);

  // Create refs for the buttons
  const showMobilesRef = useRef(null);
  const addMobileRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      showMobilesRef.current,
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );

    gsap.fromTo(
      addMobileRef.current,
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.6 } 
    );
  }, []);

  return (
    <div className="w-full flex">
      <Sidenav />
      <div className="w-[85%] h-full flex flex-col mx-auto ml-[13%]">
        <Topnav />
        <div className="flex justify-center items-center gap-8">
          <button
            ref={showMobilesRef}
            onClick={()=>setGet(false)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700"
          >
            Show Mobiles
          </button>
          <button
            ref={addMobileRef}
            onClick={()=>setGet(true)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700"
          >
            Add Mobile
          </button>
        </div>
        {get ? <Postdata /> : <ProductList />}
      </div>
    </div>
  );
};

export default Home;
