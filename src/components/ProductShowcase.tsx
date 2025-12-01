import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-12">
      <div className="mx-auto px-4">
        <div 
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Content Side */}
            <div className="order-2 md:order-1 space-y-6 z-10">
              <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-bold tracking-wide uppercase border border-[#D4AF37]/30">
                Flagship Product
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Sony WH-1000XM5 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2C94C]">
                  Noise Cancelling
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg max-w-md">
                Experience distraction-free listening with industry-leading noise cancellation and exceptional sound quality.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                  <Star className="fill-current w-5 h-5" />
                </div>
                <span className="text-white font-medium">4.9 (2,500+ Reviews)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold h-12 px-8 rounded-full text-lg">
                  Buy Now - ₹26,990
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 px-8 rounded-full text-lg">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 md:order-2 relative flex justify-center items-center">
              {/* Decorative Circle */}
              <motion.div 
                className="absolute w-[300px] h-[100px] md:w-[450px] md:h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.img 
                src="./earphonbe.png" 
                alt="Sony Headphones" 
                className="relative z-10 w-full max-w-[150px] md:max-w-[200px] object-contain drop-shadow-2xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  y: -10,
                  transition: { duration: 0.4 }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
