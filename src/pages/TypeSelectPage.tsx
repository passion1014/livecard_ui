import { Label } from "@radix-ui/react-label";
import { BellIcon, ChevronLeftIcon, ChevronRightIcon, CircleDollarSign, HandCoins, HomeIcon, NotebookPen, PlayIcon, XIcon } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "src/components/shadcn/ui/button";

export default function TypeSelectPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="mx-auto p-4 space-y-4 max-w-7xl">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <HomeIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <BellIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <XIcon className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {["보험설계사", "자동차딜러", "회계사", "변호사"].map((item) => (
          <Button key={item} variant="outline" className="text-xs py-1">
            {item}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {["의사", "교사", "연구원", "기타"].map((item) => (
          <Button key={item} variant="outline" className="text-xs py-1">
            {item}
          </Button>
        ))}
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">헤리티지 스토리</h2>
        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
            <div className="flex">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex-shrink-0 w-full h-40 sm:h-48 md:h-56 bg-white rounded-md shadow-md"></div>
              ))}
            </div>
          </div>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
        <Button variant="outline" className="w-full sm:w-1/2">취소</Button>
        <Button variant="outline" className="w-full sm:w-1/2">저장</Button>
      </div>
    </div>
  );
}