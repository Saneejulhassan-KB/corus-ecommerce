import { Timer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const PremiumFlashSale = () => {
  const flashSaleItems = [
    {
      id: 1,
      name: "Noise Cancelling Headphones",
      price: 2999,
      originalPrice: 8999,
      image: "https://cdn.mos.cms.futurecdn.net/ThiXKkp4sA5QGWVKDWyt6g-2000-80.jpg",
      discount: "65% OFF",
    },
    {
      id: 2,
      name: "Smart Fitness Band",
      price: 1499,
      originalPrice: 3999,
      image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/Pk5ydxYo6ty2Q4SX9vznP6.jpg",
      discount: "62% OFF",
    },
    {
      id: 3,
      name: "Wireless Gaming Mouse",
      price: 999,
      originalPrice: 2499,
      image: "https://sm.pcmag.com/pcmag_au/guide/t/the-best-w/the-best-wireless-gaming-mice-for-2025_ckdz.jpg",
      discount: "60% OFF",
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      price: 1999,
      originalPrice: 4999,
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/portablebluetoothspeakers-2048px-3344.jpg?auto=webp&quality=75&width=1024",
      discount: "60% OFF",
    },
    {
      id: 5,
      name: "Fast Charging Power Bank",
      price: 899,
      originalPrice: 1999,
      image: "https://cdn.mos.cms.futurecdn.net/QwvDLWZZiDMEmWj73xxASY-2000-80.jpg",
      discount: "55% OFF",
    },
    {
      id: 6,
      name: "Smart Watch Series 8",
      price: 3499,
      originalPrice: 7999,
      image: "https://cdn.mos.cms.futurecdn.net/qeL7SfLGo8o7EHH3RYAes3.jpg",
      discount: "56% OFF",
    },
    {
      id: 7,
      name: "Gaming Keyboard RGB",
      price: 1299,                                            
      originalPrice: 2999,
      image: "https://cdn.mos.cms.futurecdn.net/XMDNCcbVWnrYj3zdapKrGb-2000-80.jpg",
      discount: "56% OFF",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, "0");

  return (
    <section className="py-8">
      <div className="mx-auto px-4">
        <div 
          className="relative rounded-xl overflow-hidden shadow-xl"
          style={{
            background: "linear-gradient(135deg, #0F2027 0%, #2C5364 50%, #203A43 100%)",
          }}
        >
          {/* Header */}
          <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Timer className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Flash Sale</h2>
                <p className="text-gray-300">
                  Ends in {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </p>
              </div>
            </div>
            <Button className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-bold">
              View All Offers <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Items Grid */}
          <div className="p-6">
            <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-4 lg:grid-cols-7 pb-2 md:pb-0 scrollbar-hide">
              {flashSaleItems.map((item) => (
                <div 
                  key={item.id}
                  className="min-w-[160px] md:min-w-0 bg-white rounded-lg p-3 group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative aspect-square mb-3 overflow-hidden rounded-md bg-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.discount}
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
                    {item.name}
                  </h3>
                  <div className="flex items-end gap-2">
                    <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                    <span className="text-xs text-gray-500 line-through mb-1">₹{item.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFlashSale;
