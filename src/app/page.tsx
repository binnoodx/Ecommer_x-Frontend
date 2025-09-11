"use client"
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Offer from "./components/Offer";
import Category from "./components/Category";
import ProductCard from "./components/ProductCard"

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category:string;
  // add other fields if needed
};

export default function Home() {
  const [product, setProduct] = useState<Product[]>([])





  useEffect(() => {

    const fetchData = async () => {
      const fetch_data = await fetch("https://fakestoreapi.com/products")
      const productData = await fetch_data.json()

      setProduct(productData)
    }

    fetchData()
  }, [])



  return (
    <>

      <div className="mainDiv bg-slate-600 min-h-[100vh] overflow-x-hidden">


        <Offer />
        <Navbar />
        <Category />




        <div className="productCards w-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {product.map((item, index) => (
            <ProductCard title={item.title} price={item.price} image={item.image} category={item.category} />
          ))}

        </div>




      </div>
    </>
  );
}
