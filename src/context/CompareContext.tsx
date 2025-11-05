import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageFront: string;
  imageBack?: string;
  colors?: string[];
  sizes?: string[];
  isHot?: boolean;
}

interface CompareContextType {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: React.ReactNode }) => {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    // Already exists?
    if (compareList.find((p) => p.id === product.id)) {
      toast("Product already in compare list");
      return;
    }

    // Limit to 4
    if (compareList.length >= 4) {
      toast.error("You can compare up to 4 products only");
      return;
    }

    setCompareList((prev) => [...prev, product]);
    toast.success(`Added to compare (${compareList.length + 1}/4)`);
  };

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCompare = () => setCompareList([]);

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) throw new Error("useCompare must be used within CompareProvider");
  return context;
};
