import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const TabbedProductGrid = () => {
  const [activeTab, setActiveTab] = useState("new");

  const tabs = [
    { id: "new", label: "New Arrivals" },
    { id: "best", label: "Best Sellers" },
    { id: "top", label: "Top Rated" },
  ];

  // Mock data for different tabs
  const products = {
    new: [
      { id: "t1", name: "Nothing Phone (2)", price: 39999, originalPrice: 44999, rating: 4.5, reviewCount: 120, image: "https://www.zdnet.com/a/img/2023/07/10/f20f4179-ccbc-4648-92a1-beff66c08054/dsc04960.jpg", deliveryInfo: "Free Delivery" },
      { id: "t2", name: "AirPods Pro 2", price: 24900, originalPrice: 26900, rating: 4.8, reviewCount: 500, image: "https://preview.redd.it/airpods-pro-2-long-term-review-v0-ovh5a2r6502e1.jpg?width=474&format=pjpg&auto=webp&s=2640d194095da3d13eb7eeb881ccfde25e75e3f6", deliveryInfo: "Free Delivery" },
      { id: "t3", name: "Instax Mini 12", price: 6499, originalPrice: 8499, rating: 4.6, reviewCount: 340, image: "https://retinapix.com/cdn/shop/files/Fujifilm_Instax_Mini_12_Standalone_Camera_-_Green.webp?v=1735123179", deliveryInfo: "Free Delivery" },
      { id: "t4", name: "JBL Flip 6", price: 9999, originalPrice: 13999, rating: 4.4, reviewCount: 890, image: "https://cdn.mos.cms.futurecdn.net/QDMoogft9qjJq8qyqQ4965.jpg", deliveryInfo: "Free Delivery" },
      { id: "t13", name: "Galaxy Watch 6", price: 29999, originalPrice: 34999, rating: 4.7, reviewCount: 200, image: "https://media.wired.com/photos/64d66ead0124a91cee27dc17/1:1/w_1495,h_1495,c_limit/Samsung-Galaxy-Watch6-Classic-SOURCE-Samsung.jpg", deliveryInfo: "Free Delivery" },
      { id: "t14", name: "Sony XM4", price: 19990, originalPrice: 24990, rating: 4.8, reviewCount: 1500, image: "https://i.insider.com/5f36a9e4e89ebf001f044924?width=1200&format=jpeg", deliveryInfo: "Free Delivery" },
    ],
    best: [
      { id: "t5", name: "iPhone 15", price: 72999, originalPrice: 79900, rating: 4.7, reviewCount: 2500, image: "https://media.wired.com/photos/6508bcf4b6194ea7054252b7/master/w_2560%2Cc_limit/iPhone-15-Review-Top-Gear.jpg", isBestseller: true },
      { id: "t6", name: "Samsung S23", price: 64999, originalPrice: 89999, rating: 4.6, reviewCount: 1500, image: "https://www.cnet.com/a/img/resize/eff097eeb056570c577c5deb58bbb03014c074c3/hub/2023/02/04/9ca7b0e6-af19-4ec1-a0ce-52745a25b5d3/samsung-galaxy-s23-ultra-3.jpg?auto=webp&fit=crop&height=1200&width=1200", isBestseller: true },
      { id: "t7", name: "Sony PS5", price: 49990, originalPrice: 54990, rating: 4.9, reviewCount: 3000, image: "https://media.wired.com/photos/5fab1094227dbb78ec30db78/3:2/w_2560%2Cc_limit/Gear-PS5-src-Sony.jpg", isBestseller: true },
      { id: "t8", name: "iPad Air", price: 54900, originalPrice: 59900, rating: 4.8, reviewCount: 900, image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-IPAD-2048px-003-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024", isBestseller: true },
      { id: "t15", name: "OnePlus 11R", price: 39999, originalPrice: 44999, rating: 4.5, reviewCount: 800, image: "https://st.gsmarena.com/imgroot/reviews/23/oneplus-11r/lifestyle/-1200w5/gsmarena_003.jpg", isBestseller: true },
      { id: "t16", name: "Realme 11 Pro", price: 23999, originalPrice: 27999, rating: 4.4, reviewCount: 600, image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202305/realme_11_pro_plus-sixteen_nine.jpg?size=948:533", isBestseller: true },
    ],
    top: [
      { id: "t9", name: "MacBook Air M2", price: 99900, originalPrice: 114900, rating: 4.9, reviewCount: 450, image: "https://www.cnet.com/a/img/resize/f6532a36fd77a76627b77fdbfc198ca5ec6a73c2/hub/2022/07/13/0f081c34-5979-4026-a6ac-5e6e069c8f15/img-0963-blue.jpg?auto=webp&fit=crop&height=1200&width=1200" },
      { id: "t10", name: "Canon EOS R50", price: 65990, originalPrice: 75990, rating: 4.8, reviewCount: 120, image: "https://www.dpreview.com/files/p/articles/1969017385/Product-Photos/EOS_R50_V_Front.jpeg" },
      { id: "t11", name: "Dyson V12", price: 42900, originalPrice: 55900, rating: 4.7, reviewCount: 670, image: "https://www.themobileindian.com/wp-content/uploads/2022/02/Dyson-V12-Detect-Slim-696x392.jpg" }, // Placeholder image
      { id: "t12", name: "Bose QC45", price: 19900, originalPrice: 29900, rating: 4.8, reviewCount: 210, image: "https://www.cnet.com/a/img/resize/692f64b8dd4e3a7caba2d66907b9a56c870667f7/hub/2021/10/01/aa2644f3-f2b2-4dbf-abed-5febbc76bdfc/bose-qc45-vs-qc35-ii.jpg?auto=webp&width=1200" }, // Placeholder image
      { id: "t17", name: "GoPro Hero 11", price: 34990, originalPrice: 44990, rating: 4.6, reviewCount: 300, image: "https://media.wired.com/photos/633dbb1685e7a4cc2f802267/master/pass/GoPro-Hero-11-Gear.jpg" },
      { id: "t18", name: "Kindle Paperwhite", price: 13999, originalPrice: 14999, rating: 4.8, reviewCount: 1200, image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-EREADER-2048px-5577.jpg?auto=webp&quality=75&width=1024" }, // Placeholder
    ],
  };

  return (
    <section className="py-8 bg-background">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Discover More</h2>
          
          <div className="flex p-1 bg-surface rounded-full border border-border/50 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {products[activeTab as keyof typeof products].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TabbedProductGrid;
