import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = ({ name, price, image, caption,ram,rom }) => {

  return (
    <div className="w-[21%] rounded-lg shadow-lg bg-slate-600 hover:scale-105 transition-all duration-200 p-4">
  <img
    src={image}
    alt={name}
    className="w-full h-80 object-cover bg-transparent border border-red-900 rounded-t-lg"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-gray-100">{name}</h3>
    <p className="text-sm text-gray-300 mt-2">{caption?.slice(0, 50) + "..."}</p>
    
    {/* Price and Rating Section */}
    <div className="flex items-center mt-4">
      <span className="text-lg font-semibold text-white">${price}</span>
      <div className="ml-4 flex items-center">
        {/* Uncomment and update if you have ratings */}
        {/* <span className="text-yellow-500">
          {"★".repeat(Math.floor(rating.rate))}
        </span> */}
        {/* <span className="text-gray-400 ml-2">({rating.count})</span> */}
      </div>
    </div>
    
    {/* RAM and ROM Section */}
    <div className="mt-4 flex space-x-4 text-sm text-gray-300">
      <div>
        <span className="font-semibold">RAM:</span> {ram} GB
      </div>
      <div>
        <span className="font-semibold">ROM:</span> {rom} GB
      </div>
    </div>
  </div>
</div>

  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchdata = async() =>{
        const data = await axios.get("http://localhost:4000/getmobiledata");   
        console.log(data?.data?.newdata);
        setProducts(data?.data?.newdata);
    }
    fetchdata();
  }, []);


  return (
    <div className=" w-full relative ml-[10%] flex flex-wrap gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;