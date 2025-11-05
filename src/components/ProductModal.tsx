import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Heart, RefreshCw } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

interface ProductModalProps {
  product: any | null;
  open: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  open,
  onClose,
}) => {
  const { addToCompare } = useCompare();
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const images = React.useMemo(() => {
    if (!product) return [];
    return [
      product.imageFront,
      product.imageBack,
      ...(product.images || []),
    ].filter(Boolean);
  }, [product]);

  // navigation handlers
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[94%] sm:w-[90%] max-w-4xl mx-auto p-4 sm:p-6 rounded-xl overflow-y-auto max-h-[90vh] scroll-smooth">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Quick view of product details</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Carousel Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex">
                {images.map((img: string, i: number) => (
                  <div key={i} className="flex-[0_0_100%]">
                    <img
                      src={img}
                      alt={`${product.name}-${i}`}
                      className="w-full h-80 object-cover rounded-lg select-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots (Thumbnails) */}
            <div className="flex justify-center mt-2 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-3 h-3 rounded-full ${
                    selectedIndex === i ? "bg-primary" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <div className="flex gap-2">
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 ${
                    isWishlisted ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart fill={isWishlisted ? "currentColor" : "none"} />
                </Button>
                {/* Compare */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500"
                  onClick={() => addToCompare(product)}
                >
                  <RefreshCw />
                </Button>
              </div>
            </div>

            <div>
              <p className="text-primary text-2xl font-bold">
                ₹{product.price}
              </p>
              {product.originalPrice && (
                <p className="text-sm line-through text-gray-500">
                  ₹{product.originalPrice}
                </p>
              )}
            </div>

            {product.colors?.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-1">Available Colors:</p>
                <div className="flex gap-2">
                  {product.colors.map((c: string) => (
                    <div
                      key={c}
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div>
                <p className="text-sm font-semibold mb-1">Available Sizes:</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((s: string) => (
                    <span
                      key={s}
                      className="px-3 py-1 border rounded text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button className="w-full mt-4">Add to Cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
