import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollButtonsProps {
  previousPage: () => void;
  nextPage: () => void;
  hasNextPage: boolean;
  page: number;
}

const ScrollButtons: React.FC<ScrollButtonsProps> = ({
  previousPage,
  nextPage,
  page,
  hasNextPage,
}) => {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={previousPage}
        disabled={page === 1}
        className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center cursor-pointer rounded-full bg-muted disabled:bg-muted/30 text-primary-foreground hover:bg-muted/70 disabled:text-gray-400
    disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextPage}
        disabled={!hasNextPage}
        className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center cursor-pointer rounded-full bg-muted disabled:bg-muted/30 text-primary-foreground hover:bg-muted/70 disabled:text-gray-400
    disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ScrollButtons;
