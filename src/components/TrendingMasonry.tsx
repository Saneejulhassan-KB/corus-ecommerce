import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TrendingMasonry = () => {
  const products = [
    {
      id: 1,
      name: "Urban Street Hoodie",
      price: "$89.00",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop",
      span: "col-span-2 row-span-2",
      category: "Streetwear"
    },
    {
      id: 2,
      name: "Classic Leather Watch",
      price: "$129.00",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Minimalist Sneakers",
      price: "$149.00",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
      category: "Footwear"
    },
    {
      id: 4,
      name: "Denim Jacket",
      price: "$79.00",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1887&auto=format&fit=crop",
      span: "col-span-2 row-span-1",
      category: "Outerwear"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2 tracking-tight">Trending Now</h2>
            <p className="text-gray-500">Discover what everyone is talking about this week.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:text-gray-600 transition-colors">
            VIEW ALL PRODUCTS <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[300px]">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative group overflow-hidden rounded-2xl ${product.span}`}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider mb-1 md:mb-2 block">
                  {product.category}
                </span>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-1">
                  <h3 className="text-sm md:text-xl font-bold text-white leading-tight">{product.name}</h3>
                  <span className="text-xs md:text-lg font-medium text-white bg-white/20 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 rounded-lg">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMasonry;
