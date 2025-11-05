import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, RefreshCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCompare } from "@/context/CompareContext";
import { useProductCard } from "@/context/ProductCardContext";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageFront: string;
    imageBack?: string;
    colors?: string[];
    sizes?: string[];
    isHot?: boolean;
  };
  className?: string;
}

const ProductCardNew = ({ product, className = "" }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCompare } = useCompare();
  const { activeCardId, setActiveCardId } = useProductCard();
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // detect actual touch usage
  useEffect(() => {
    const handleTouchStart = () => setIsTouchActive(true);
    const handleMouseMove = () => setIsTouchActive(false);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isActive = activeCardId === product.id;

  const handleCardClick = (e: React.MouseEvent) => {
    if (isTouchActive) {
      if (!isActive) {
        e.preventDefault();
        setActiveCardId(product.id); // activate this card
      } else {
        navigate(`/product/${product.id}`);
      }
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, action?: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    if (action) action();
  };

  return (
    <div
      onClick={handleCardClick}
      className={`block group relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
    >
      <Card className="overflow-hidden border-none shadow-none">
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative aspect-[3/4] overflow-hidden bg-surface">
            <img
              src={product.imageFront}
              alt={product.name}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                !isActive ? "opacity-100" : "opacity-90"
              }`}
            />
            {product.imageBack && (
              <img
                src={product.imageBack}
                alt={`${product.name} back`}
                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}

            {product.isHot && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                  Hot
                </Badge>
              </div>
            )}

            {/* Right-side buttons */}
            <div
              className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-white"
                onClick={(e) => handleButtonClick(e)}
              >
                <ShoppingCart className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-white"
                onClick={(e) => handleButtonClick(e)}
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-white"
                onClick={(e) =>
                  handleButtonClick(e, () => addToCompare(product))
                }
              >
                <RefreshCw className="h-4 w-4 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                <Eye className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 py-1 text-xs bg-white"
                    onClick={(e) => handleButtonClick(e)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="p-3 space-y-2 text-center">
            <h3 className="font-medium text-sm text-gray-800 line-clamp-2 leading-tight">
              {product.name}
            </h3>

            <div className="flex items-center justify-center gap-2">
              <span className="text-base font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.colors && (
              <div className="flex justify-center gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-4 h-4 rounded-full border cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={(e) => handleButtonClick(e)}
                  />
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <div onClick={(e) => e.stopPropagation()}>
        <ProductModal
          product={product}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default ProductCardNew;
