import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, X, ArrowLeft, Star, Truck, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Apple MacBook Air M2 Chip (13.6-inch, 8GB RAM, 256GB SSD)",
      price: 99900,
      originalPrice: 119900,
      rating: 4.7,
      reviewCount: 8920,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery",
      seller: "Apple Authorised Store",
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 24990,
      originalPrice: 34990,
      rating: 4.6,
      reviewCount: 5670,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery today",
      seller: "AudioHub",
    },
    {
      id: "3",
      name: "Canon EOS R6 Mark II Mirrorless Camera Body",
      price: 189900,
      originalPrice: 219900,
      rating: 4.8,
      reviewCount: 890,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery",
      seller: "Canon India",
    },
  ]);

  const removeItem = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setWishlistItems([]);
  };

  const totalWishlistValue = wishlistItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 pb-28 md:pb-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text-primary">Wishlist</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-text-muted mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-text-secondary mb-6">
              Save items you love to your wishlist and never lose track of them!
            </p>
            <Link to="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Wishlist Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-text-primary">
                  My Wishlist ({wishlistItems.length} items)
                </h1>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-text-secondary hover:text-destructive"
                  onClick={clearAll}
                >
                  <X className="h-4 w-4" />
                  Clear All
                </Button>
              </div>

              {wishlistItems.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg bg-surface"
                      />

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-text-primary line-clamp-2">
                            {item.name}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-text-secondary hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{item.rating}</span>
                          <span className="text-text-secondary ml-1">
                            ({item.reviewCount.toLocaleString()} reviews)
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-text-primary">
                            ₹{item.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-text-secondary line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <Badge variant="secondary" className="text-success">
                            {Math.round(
                              ((item.originalPrice - item.price) /
                                item.originalPrice) *
                                100
                            )}
                            % off
                          </Badge>
                        </div>

                        <p className="text-sm text-text-secondary">
                          Sold by: {item.seller}
                        </p>

                        <div className="flex justify-between items-center pt-2">
                          <div className="text-sm text-success flex items-center gap-1">
                            <Truck className="h-4 w-4" />
                            {item.deliveryInfo}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Wishlist Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-text-primary">
                    Wishlist Summary
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">
                        Total Items
                      </span>
                      <span className="font-medium">
                        {wishlistItems.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Total Value</span>
                      <span className="font-medium">
                        ₹{totalWishlistValue.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-3">
                    <div className="text-sm text-text-secondary">
                      Move your favorite items to the cart before they sell out.
                    </div>
                  </div>

                  <Link to="/" className="block w-full">
                    <Button className="w-full h-12 text-lg">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
