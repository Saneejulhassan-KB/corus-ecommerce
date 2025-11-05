import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductGridNew from "@/components/ProductGridNew";
import SortFilterBar from "@/components/SortFilterBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // ✅ Search results (mocked — replace with real API later)
  const searchResults = Array.from({ length: 16 }, (_, index) => ({
    id: `search-${index + 1}`,
    name: `${query} Product ${index + 1} - Premium Quality`,
    price: Math.floor(Math.random() * 50000) + 5000,
    originalPrice: Math.floor(Math.random() * 70000) + 10000,
    imageFront: `https://images.unsplash.com/photo-${
      1500000000000 + index
    }?w=600&h=600&fit=crop`,
    imageBack: `https://images.unsplash.com/photo-${
      1500000000500 + index
    }?w=600&h=600&fit=crop`,
    colors: ["#f87171", "#60a5fa", "#34d399"],
    sizes: ["S", "M", "L"],
    isHot: Math.random() > 0.8,
  }));

  // ✅ Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brands = [
    "Samsung",
    "Apple",
    "Sony",
    "Nike",
    "Canon",
    "Xiaomi",
    "LG",
    "HP",
  ];
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Beauty",
  ];

  const activeFiltersCount =
    selectedBrands.length +
    (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto px-4 py-6">
        {/* ✅ Search Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
            <Search className="h-4 w-4" />
            <span>Search results for</span>
            <Badge variant="secondary" className="font-medium">
              "{query}"
            </Badge>
          </div>
          <p className="text-text-secondary">
            Showing {searchResults.length} results
          </p>
        </div>

        {/* ✅ Sort & Filter bar */}
        <SortFilterBar
          activeFiltersCount={activeFiltersCount}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />

        <div className="flex gap-6">
          {/* ✅ Filters Sidebar */}
          <aside
            className={`w-80 flex-shrink-0 space-y-6 ${
              showFilters ? "block" : "hidden"
            } md:block`}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" className="text-primary">
                      Clear All
                    </Button>
                  )}
                </div>

                {/* Active Filters */}
                {activeFiltersCount > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedBrands.map((brand) => (
                        <Badge
                          key={brand}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {brand}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() =>
                              setSelectedBrands(
                                selectedBrands.filter((b) => b !== brand)
                              )
                            }
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={category} />
                        <label
                          htmlFor={category}
                          className="text-sm text-text-secondary cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-sm text-text-secondary">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Brands</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(
                                selectedBrands.filter((b) => b !== brand)
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={brand}
                          className="text-sm text-text-secondary cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* ✅ Product Grid */}
          <div className="flex-1">
            <ProductGridNew products={searchResults} />

            {/* Pagination */}
            <div className="hidden sm:flex justify-center items-center gap-2 mt-8">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="sm"
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
