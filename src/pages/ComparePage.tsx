import { useCompare } from "@/context/CompareContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ComparePage = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  const maxSlots = 4;
  const emptySlots = maxSlots - compareList.length;

  // Example feature structure (replace with your real product fields)
  const featureSections = [
    { title: "Price", key: "price" },
    { title: "Original Price", key: "originalPrice" },
    { title: "Available Sizes", key: "sizes" },
    { title: "Colors", key: "colors" },
    { title: "Highlights", key: "highlights" },
  ];

  if (compareList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <p>No products to compare.</p>
        <Button className="mt-4" onClick={() => navigate("/products")}>
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-28 md:pb-6">
        <h2 className="text-xl font-semibold">
          Compare {compareList.length} Product
          {compareList.length > 1 ? "s" : ""}
        </h2>
        <Button variant="outline" onClick={clearCompare}>
          Clear All
        </Button>
      </div>

      {/* Compare grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[200px_repeat(4,1fr)] min-w-[900px] border rounded-lg bg-white">
          {/* Left Feature Labels Column */}
          <div className="border-r bg-gray-100 p-4 space-y-6">
            <div className="font-semibold text-gray-700">Products</div>
            {featureSections.map((f) => (
              <div
                key={f.key}
                className="font-medium text-sm text-gray-700 border-t pt-4"
              >
                {f.title}
              </div>
            ))}
          </div>

          {/* Product Columns */}
          {compareList.map((product) => (
            <div key={product.id} className="p-4 text-center border-r">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.imageFront}
                  alt={product.name}
                  className="w-full h-40 object-contain mx-auto"
                />
                <button
                  className="absolute top-1 right-1 bg-white border rounded-full text-xs px-2 py-1"
                  onClick={() => removeFromCompare(product.id)}
                >
                  ✕
                </button>
              </div>

              {/* Product name */}
              <h3 className="text-sm font-medium mt-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Dynamic Features */}
              {featureSections.map((f) => {
                const value = (product as any)[f.key];
                if (!value) return <div key={f.key} className="py-4 text-gray-400">—</div>;

                return (
                  <div key={f.key} className="py-4 border-t text-sm">
                    {Array.isArray(value) ? (
                      f.key === "colors" ? (
                        <div className="flex justify-center gap-1">
                          {value.map((color: string) => (
                            <div
                              key={color}
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      ) : (
                        value.join(", ")
                      )
                    ) : f.key === "price" ? (
                      <span className="font-bold text-gray-800">${value}</span>
                    ) : (
                      String(value)
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Empty Slots (Add Product Boxes) */}
          {Array.from({ length: emptySlots }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border-r text-gray-400"
            >
              <div className="w-20 h-20 bg-gray-100 rounded mb-2" />
              <p>Add a product</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => navigate("/products")}
              >
                Choose
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
