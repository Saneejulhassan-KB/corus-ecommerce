import SectionHeader from "@/components/SectionHeader";

const FeaturedBrands = () => {
  const brands = [
    { id: 1, name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
    { id: 2, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
    { id: 3, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" },
    { id: 4, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" },
    { id: 5, name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sony_logo.svg/2560px-Sony_logo.svg.png" },
    { id: 6, name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Puma_logo.svg/2560px-Puma_logo.svg.png" },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="mx-auto px-4">
        <SectionHeader title="Featured Brands" subtitle="Top Brands, Great Prices" />
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer bg-gray-50 hover:bg-white"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
