import { createContext, useContext, useState, ReactNode } from "react";

interface ProductCardContextType {
  activeCardId: string | null;
  setActiveCardId: (id: string | null) => void;
}

const ProductCardContext = createContext<ProductCardContextType | undefined>(undefined);

export const ProductCardProvider = ({ children }: { children: ReactNode }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  return (
    <ProductCardContext.Provider value={{ activeCardId, setActiveCardId }}>
      {children}
    </ProductCardContext.Provider>
  );
};

export const useProductCard = () => {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error("useProductCard must be used within a ProductCardProvider");
  }
  return context;
};
