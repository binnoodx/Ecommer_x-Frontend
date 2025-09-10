import Image from "next/image";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Dropmenu from "./components/Dropdown";
import ProductCard from "./components/ProductCard"

export default function Home() {
  return (
    <>

    <div className="mainDiv bg-slate-600 min-h-[100vh] overflow-x-hidden">

{/* {Hello Test test} */}

    <Offer/>
    <Navbar/>

    

    <div className="productCards w-screen grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

    </div>




        </div>
   </>
  );
}
