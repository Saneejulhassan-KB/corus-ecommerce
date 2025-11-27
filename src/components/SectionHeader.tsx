import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  onViewAllClick?: () => void;
  className?: string;
  textColor?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  viewAllLink,
  onViewAllClick,
  className = "",
  textColor = "text-text-primary",
}: SectionHeaderProps) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="flex flex-col">
        <h2 className={`text-xl md:text-2xl font-bold ${textColor}`}>{title}</h2>
        {subtitle && (
          <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
        )}
      </div>
      {(viewAllLink || onViewAllClick) && (
        <Button
          variant="default"
          size="sm"
          className="bg-primary hover:bg-primary-hover text-white"
          onClick={onViewAllClick}
        >
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      )}
    </div>
  );
};

export default SectionHeader;
