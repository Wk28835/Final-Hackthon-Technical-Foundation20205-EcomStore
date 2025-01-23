import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Product {
  _id: string;
  title: string;
  price: number;
  colors: string;
  size: string;
  quantity: string;
  status: string;
  category: string;
  imageUrl: string;
  slug?: { current: string };
}

const Search: React.FC = () => {
  const [searchProduct, setSearchProduct] = useState<Product[]>([]);
  const [loading,setLoading]= useState(true);
            
  const router = useRouter();

  const {term}=router.query;
  console.log("check router query term",term);
   
  
    
   
    useEffect(()=>{
     if(term){   
        const fetchitem=async ()=> {
      try {
        const res = await fetch(`/api/Search?term=${term}`);
        console.log("check res",res);
        if (!res.ok) {
            
            if(res.status===404){
                
                throw new Error(`Failed to fetch Products: ${res.statusText}`);   
                
            }
            else if(res.status===500){
                throw new Error("Internal server error");
            }
            else{
            throw new Error("Failed to fetch Products!");
        }
          }
        const data = await res.json();
        setSearchProduct(data);      
       
      } catch (error) {
        console.error("Error Fetching Products:", error);
      } finally{
        setLoading(false);
      }
    }
      fetchitem();}
    },[term]);  
  

  if(loading) return <div>Loading results....</div>
 



  return (
    <div>
      <section>
        <div className="text-black flex flex-wrap text-center justify-between px-4 sm:px-8 md:px-16" style={{ height: "36px", marginTop: "60px" }}>
          <h1 className="text-xl sm:text-2xl text-center md:text-3xl font-bold">New (500)</h1>
          <h1 className="text-end cursor-pointer sm:ml-auto flex items-center">
            Hide Filters
            <Image alt="image" width={24} height={24} src="/filter.png" />
          </h1>
          <button className="flex items-center gap-1 mt-2 sm:mt-0">
            Sort by
            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
              <path d="M12 15V3" />
            </svg>
          </button>
        </div>
      </section>

      <div className="flex flex-wrap">
        

        <div className="w-full sm:w-3/4 md:w-4/5 px-4">
          <section className="flex flex-wrap gap-4 mt-4">
            {searchProduct.length === 0 ? (
              <div className="text-center text-red-500 text-xl ml-64 font-extrabold w-full">
                Search Product Not found!.
              </div>
            ) : (
              searchProduct.map((item: Product) => (
                <div
                  key={item._id}
                  className="flex flex-col my-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  {/* Product Image */}
                  <div className="product1">
                    <Link href={`/product_details/${item.slug?.current || ""}`}>
                      {item.imageUrl && (
                        <Image
                          alt={item.title}
                          src={item.imageUrl}
                          width={300}
                          height={300}
                          className="rounded"
                        />
                      )}
                    </Link>
                  </div>

                  {/* Product Details */}
                  <div className="product-details mt-4">
                    <h1 className="text-orange-700 font-medium text-sm">{item.status}</h1>
                    <h2 className="text-black font-semibold text-lg mt-2">{item.title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{item.category}</p>

                    {/* Colors */}
                    <div className="colors mt-4 flex items-center space-x-2">
                      {Array.isArray(item.colors) && item.colors.includes("red") && (
                        <button className="border-2 border-gray-300 mx-1 bg-red-700 rounded-full w-6 h-6"></button>
                      )}
                      {Array.isArray(item.colors) && item.colors.includes("green") && (
                        <button className="border-2 border-gray-300 mx-1 bg-green-700 rounded-full w-6 h-6"></button>
                      )}
                      {Array.isArray(item.colors) && item.colors.includes("blue") && (
                        <button className="border-2 border-gray-300 mx-1 bg-blue-700 rounded-full w-6 h-6"></button>
                      )}
                      {Array.isArray(item.colors) && item.colors.includes("pink") && (
                        <button className="border-2 border-gray-300 mx-1 bg-pink-700 rounded-full w-6 h-6"></button>
                      )}
                      {Array.isArray(item.colors) && item.colors.includes("black") && (
                        <button className="border-2 border-gray-300 mx-1 bg-gray-900 rounded-full w-6 h-6"></button>
                      )}
                    </div>

                    {/* Sizes */}
                    <div className="sizes mt-4 flex items-center space-x-2">
                      {Array.isArray(item.size) && item.size.includes("S") && <span className="border border-gray-300 px-2 py-1 text-sm rounded">S</span>}
                      {Array.isArray(item.size) && item.size.includes("M") && <span className="border border-gray-300 px-2 py-1 text-sm rounded">M</span>}
                      {Array.isArray(item.size) && item.size.includes("L") && <span className="border border-gray-300 px-2 py-1 text-sm rounded">L</span>}
                      {Array.isArray(item.size) && item.size.includes("XL") && <span className="border border-gray-300 px-2 py-1 text-sm rounded">XL</span>}
                      {Array.isArray(item.size) && item.size.includes("XXL") && <span className="border border-gray-300 px-2 py-1 text-sm rounded">XXL</span>}
                    </div>

                    {/* Price */}
                    <h3 className="text-black font-semibold text-md mt-4">MRP: ₹ {item.price}</h3>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>

     
    </div>
  );
};

export default Search;
