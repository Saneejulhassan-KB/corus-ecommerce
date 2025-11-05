import { useCompare } from "@/context/CompareContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CompareBar = () => {
  const { compareList, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full flex items-center gap-4 px-4 py-2 border z-50">
      <span className="text-sm font-medium">
        Compare {compareList.length} {compareList.length > 1 ? "items" : "item"}
      </span>

      <Button
        variant="default"
        size="sm"
        onClick={() => navigate("/compare")}
      >
        View Compare
      </Button>

      <Button variant="ghost" size="sm" onClick={clearCompare}>
        Clear
      </Button>
    </div>
  );
};

export default CompareBar;
