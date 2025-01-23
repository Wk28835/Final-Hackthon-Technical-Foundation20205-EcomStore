import Image from "next/image";

const Hero2: React.FC = () => {
  return (
    <div>
      {/* First Section */}
      <section className="relative mx-auto max-w-screen-xl">
        <h1 className="text-lg font-bold mb-4">Don&#39t Miss</h1>
        <Image
          width={1344}
          height={700}
          alt="Highlight Image"
          src="/boy6.png"
          className="w-full h-auto"
        />
        <div className="text-center mt-12">
          <h1 className="text-3xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
          <p className="text-sm text-gray-700 max-w-lg mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm">
            Shop
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative mx-auto max-w-screen-xl mt-16">
        <h1 className="text-lg font-bold mb-4">The Essentials</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mens */}
          <div className="relative">
            <Image
              alt="Mens Essentials"
              width={440}
              height={540}
              src="/home1.png"
              className="w-full h-auto"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm">
              Mens
            </button>
          </div>
          {/* Womens */}
          <div className="relative">
            <Image
              alt="Womens Essentials"
              width={440}
              height={540}
              src="/home2.png"
              className="w-full h-auto"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm">
              Womens
            </button>
          </div>
          {/* Kids */}
          <div className="relative">
            <Image
              alt="Kids Essentials"
              width={440}
              height={540}
              src="/home3.png"
              className="w-full h-auto"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm">
              Kids
            </button>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="relative mx-auto max-w-screen-lg mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="font-bold">Icons</h1>
            <ul className="text-sm space-y-2">
              <li>Air Force 1</li>
              <li>Air Max 95</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Shoes</h1>
            <ul className="text-sm space-y-2">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Clothing</h1>
            <ul className="text-sm space-y-2">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">Kids</h1>
            <ul className="text-sm space-y-2">
              <li>Infants & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
