import React from 'react';
import { ArrowRight } from 'lucide-react';

const CuratedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "The Minimalist",
      description: "Clean lines and neutral tones for the modern aesthetic.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
      theme: "light"
    },
    {
      id: 2,
      title: "Urban Explorer",
      description: "Functional gear designed for city life and beyond.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      theme: "dark"
    },
    {
      id: 3,
      title: "Vintage Revival",
      description: "Timeless pieces reimagined for today.",
      image: "https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=2070&auto=format&fit=crop",
      theme: "dark"
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Curated For You</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Shop By Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked assortments to help you find exactly what fits your style.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group relative h-[200px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-2 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-sm md:text-3xl font-bold text-white mb-1 md:mb-3 leading-tight">{collection.title}</h3>
                <p className="text-white/90 mb-2 md:mb-8 max-w-xs text-[10px] md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden sm:block">
                  {collection.description}
                </p>
                <button className="bg-white text-black px-3 py-1 md:px-8 md:py-3 rounded-full font-medium flex items-center gap-1 md:gap-2 hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 text-[10px] md:text-base">
                  <span className="hidden sm:inline">Explore Collection</span>
                  <span className="sm:hidden">Explore</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
