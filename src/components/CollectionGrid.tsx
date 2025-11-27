import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CollectionGrid = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Vibes",
      subtitle: "New Collection",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop",
      size: "large", // spans 2 rows
      gradient: "from-orange-500/80 to-pink-500/80",
    },
    {
      id: 2,
      title: "Tech Essentials",
      subtitle: "Up to 40% Off",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      size: "small",
      gradient: "from-blue-600/80 to-cyan-400/80",
    },
    {
      id: 3,
      title: "Home Decor",
      subtitle: "Refresh Your Space",
      image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&h=400&fit=crop",
      size: "small",
      gradient: "from-green-600/80 to-emerald-400/80",
    },
    {
      id: 4,
      title: "Fitness Gear",
      subtitle: "Get Active",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      size: "wide", // spans 2 cols
      gradient: "from-purple-600/80 to-indigo-400/80",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Curated Collections</h2>
        
        <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
          {collections.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300
                ${item.size === 'large' ? 'row-span-2' : ''}
                ${item.size === 'wide' ? 'col-span-2' : ''}
              `}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 opacity-90">{item.subtitle}</p>
                <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-3 leading-tight">{item.title}</h3>
                <Button 
                  variant="link" 
                  className="text-white p-0 h-auto font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:no-underline text-xs md:text-base"
                >
                  Shop Now <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
