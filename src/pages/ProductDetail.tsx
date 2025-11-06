import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
  MapPin,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: id || "1",
    name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256GB)",
    price: 89999,
    originalPrice: 124999,
    rating: 4.5,
    reviewCount: 12450,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop",
    ],
    description:
      "Experience the ultimate in mobile technology with the Samsung Galaxy S23 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, advanced camera system with 200MP main sensor, and powerful performance that handles everything you throw at it.",
    features: [
      "6.8-inch Dynamic AMOLED 2X Display",
      "200MP + 12MP + 10MP + 10MP Quad Camera",
      "Snapdragon 8 Gen 2 Processor",
      "5000mAh Battery with 45W Fast Charging",
      "S Pen Included",
      "5G Ready",
    ],
    specifications: {
      Display: "6.8-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      Storage: "256GB",
      Camera: "200MP + 12MP + 10MP + 10MP",
      Battery: "5000mAh",
      OS: "Android 13",
    },
    seller: "TechWorld Store",
    inStock: true,
    deliveryDate: "Tomorrow, Dec 25",
  };

  const reviews = [
    {
      id: 1,
      user: "Ekansh Maheshwari",
      rating: 5,
      title: "Worth every penny",
      comment:
        "It's actually the Beast. Go for it. Bass lovers will love the product.",
      images: [
        "https://i.pcmag.com/imagery/reviews/01rEkknQmqadJoltyqosMu8-21.fit_lim.size_625x365.v1736264406.jpg",
        "https://www.trustedreviews.com/wp-content/uploads/sites/7/2024/01/OnePlus-12-review-2-820x461.jpg",
        "https://imageio.forbes.com/specials-images/imageserve/63e119a4634c9e97dc5133d2/OnePlus-11-5G/960x0.jpg?height=399&width=711&fit=bounds",
      ],
      verified: true,
      location: "Kashipur",
      date: "Sep, 2022",
      likes: 30,
      dislikes: 5,
    },
    {
      id: 2,
      user: "Riya Sharma",
      rating: 4,
      title: "Excellent camera quality!",
      comment:
        "The camera is amazing, especially in low light. Battery backup could be slightly better.",
      images: [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
      ],
      verified: true,
      location: "Mumbai",
      date: "Jan, 2023",
      likes: 42,
      dislikes: 3,
    },
    {
      id: 3,
      user: "Arjun Patel",
      rating: 5,
      title: "Best flagship Android phone",
      comment:
        "Performance is top-notch, no lag, and display quality is stunning. Worth the high price.",
      images: [],
      verified: true,
      location: "Ahmedabad",
      date: "Feb, 2023",
      likes: 65,
      dislikes: 2,
    },
    {
      id: 4,
      user: "Sneha Iyer",
      rating: 3,
      title: "Good but not great",
      comment:
        "The phone is good overall, but it heats up slightly during gaming sessions.",
      images: [
        "https://images.unsplash.com/photo-1606813902784-9d5f2e3b4c92?w=600",
      ],
      verified: false,
      location: "Chennai",
      date: "Apr, 2023",
      likes: 20,
      dislikes: 10,
    },
    {
      id: 5,
      user: "Rohit Verma",
      rating: 4,
      title: "Satisfied with the purchase",
      comment:
        "Everything works as expected. Great battery life and smooth experience overall.",
      images: [],
      verified: true,
      location: "Delhi",
      date: "May, 2023",
      likes: 38,
      dislikes: 4,
    },
    {
      id: 6,
      user: "Anjali Nair",
      rating: 5,
      title: "Superb build quality",
      comment:
        "Feels premium in hand. The display is bright and colorful. S Pen works flawlessly!",
      images: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
      ],
      verified: true,
      location: "Kochi",
      date: "Jun, 2023",
      likes: 51,
      dislikes: 1,
    },
    {
      id: 7,
      user: "Vikram Singh",
      rating: 2,
      title: "Not worth the hype",
      comment:
        "For this price, I expected better performance. The fingerprint sensor is slow sometimes.",
      images: [],
      verified: false,
      location: "Lucknow",
      date: "Jul, 2023",
      likes: 15,
      dislikes: 22,
    },
    {
      id: 8,
      user: "Neha Gupta",
      rating: 4,
      title: "Amazing display, decent battery",
      comment:
        "Display is gorgeous and responsive. Battery life is okay but could use optimization.",
      images: [
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
      ],
      verified: true,
      location: "Pune",
      date: "Aug, 2023",
      likes: 33,
      dislikes: 7,
    },
    {
      id: 9,
      user: "Mohammed Faisal",
      rating: 5,
      title: "Beast of a phone!",
      comment:
        "No issues so far. Camera, performance, and battery life are all exceptional.",
      images: [],
      verified: true,
      location: "Hyderabad",
      date: "Oct, 2023",
      likes: 60,
      dislikes: 3,
    },
    {
      id: 10,
      user: "Kavya Menon",
      rating: 4,
      title: "Stylish and powerful",
      comment:
        "Love the design and feel. Runs all my apps smoothly. Slightly expensive but worth it.",
      images: [
        "https://images.unsplash.com/photo-1580910051071-4fb92b39bdbf?w=600",
      ],
      verified: true,
      location: "Bangalore",
      date: "Nov, 2023",
      likes: 44,
      dislikes: 6,
    },
  ];

  const relatedProducts = [
    {
      id: "2",
      name: "iPhone 15 Pro Max",
      price: 134900,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      rating: 4.6,
    },
    {
      id: "3",
      name: "Google Pixel 8 Pro",
      price: 84999,
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
      rating: 4.4,
    },
  ];

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 pb-28 md:pb-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <span>Home</span> / <span>Electronics</span> /{" "}
          <span>Smartphones</span> /
          <span className="text-text-primary ml-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-[40%_60%] gap-4 mb-12">
          {/* Product Images - Sticky */}
          <div className="relative">
            <div className="sticky top-20 flex flex-col-reverse md:flex-row items-start gap-4 max-h-[calc(100vh-5rem)]">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 md:overflow-y-auto overflow-x-auto md:max-h-[400px] w-full md:w-auto pb-2 md:pb-0">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setSelectedImage(index)}
                    className={`cursor-pointer shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover w-12 h-12 md:w-14 md:h-14 hover:opacity-90 transition-transform"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 rounded-xl overflow-hidden flex items-center justify-center h-[300px] sm:h-[400px] md:h-[450px] bg-surface">
                {/* Desktop hover zoom */}
                <div
                  className="hidden md:block w-full h-full"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transformOrigin = `${x}% ${y}%`;
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      img.style.transition = "transform 0.2s ease-out";
                      img.style.transform = "scale(1.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      img.style.transition = "transform 0.3s ease-in";
                      img.style.transform = "scale(1)";
                      img.style.transformOrigin = "center center";
                    }
                  }}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-300"
                  />
                </div>

                {/* Mobile / Tablet zoom */}
                <div className="block md:hidden w-full h-full">
                  <Zoom>
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </Zoom>
                </div>

                {/* Top right buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="bg-background/80 hover:bg-background"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? "fill-accent text-accent" : ""
                      }`}
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-background/80 hover:bg-background"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 bg-success text-success-foreground px-2 py-1 rounded text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                {product.rating}
              </div>
              <span className="text-text-secondary">
                {product.reviewCount.toLocaleString()} ratings
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-text-primary">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-lg text-text-secondary line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <Badge className="bg-success text-success-foreground">
                {discountPercentage}% off
              </Badge>
            </div>

            <p className="text-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold text-text-primary mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-medium text-text-primary">
                      Free Delivery
                    </div>
                    <div className="text-sm text-text-secondary">
                      {product.deliveryDate}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-text-primary">
                      7 Days Return
                    </div>
                    <div className="text-sm text-text-secondary">
                      Easy return policy
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-medium text-text-primary">
                      1 Year Warranty
                    </div>
                    <div className="text-sm text-text-secondary">
                      Brand warranty included
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-text-secondary">Quantity:</span>
                <div className="flex items-center border border-border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="h-12" variant="outline">
                  Add to Cart
                </Button>
                <Button className="h-12">Buy Now</Button>
              </div>
            </div>

            <div className="text-sm text-text-secondary">
              <MapPin className="h-4 w-4 inline mr-1" />
              Sold by:{" "}
              <span className="text-text-primary font-medium">
                {product.seller}
              </span>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="reviews" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="qna">Q&A</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-text-primary mb-2">
                    {product.rating}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= product.rating
                            ? "fill-warning text-warning"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-text-secondary">
                    {product.reviewCount.toLocaleString()} ratings
                  </div>
                </CardContent>
              </Card> */}

              <div className="md:col-span-12 space-y-4">
                {reviews.map((review) => (
                  <Card
                    key={review.id}
                    className="border border-border rounded-lg"
                  >
                    <CardContent className="p-5">
                      {/* Rating badge and title */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-sm font-medium">
                          <Star className="h-4 w-4 fill-current" />
                          {review.rating}
                        </div>
                        <h3 className="font-semibold text-text-primary text-base">
                          {review.title}
                        </h3>
                      </div>

                      {/* Comment */}
                      <p className="text-text-secondary mb-3 leading-relaxed">
                        {review.comment}
                      </p>

                      {/* Review images */}
                      {review.images && review.images.length > 0 && (
                        <div className="flex gap-2 mb-3">
                          {review.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`review-${index}`}
                              className="w-16 h-16 object-cover rounded-md border"
                            />
                          ))}
                        </div>
                      )}

                      {/* Reviewer info */}
                      <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                        <span className="font-medium text-text-primary">
                          {review.user}
                        </span>
                        {review.verified && (
                          <Badge
                            variant="secondary"
                            className="text-xs flex items-center gap-1"
                          >
                            <Shield className="h-3 w-3 text-green-600" />{" "}
                            Certified Buyer
                          </Badge>
                        )}
                        <span>• {review.location}</span>
                        <span>• {review.date}</span>
                      </div>

                      {/* Like / Dislike section */}
                      <div className="flex items-center gap-6 text-sm text-text-secondary">
                        <button
                          onClick={() => {
                            review.likes++;
                          }}
                          className="flex items-center gap-1 hover:text-primary transition"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span>{review.likes}</span>
                        </button>

                        <button
                          onClick={() => {
                            review.dislikes++;
                          }}
                          className="flex items-center gap-1 hover:text-primary transition"
                        >
                          <ThumbsDown className="h-4 w-4" />
                          <span>{review.dislikes}</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-border"
                      >
                        <span className="text-text-secondary">{key}</span>
                        <span className="font-medium text-text-primary">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qna">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-text-secondary">
                  No questions yet. Be the first to ask!
                </p>
                <Button className="mt-4">Ask a Question</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-text-primary mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="text-sm text-text-secondary">
                        {product.rating}
                      </span>
                    </div>
                    <div className="font-bold text-text-primary">
                      ₹{product.price.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
