import { MenuIcon, XIcon, ImageIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useSwipeable } from 'react-swipeable';
import { Button } from "src/components/shadcn/ui/button";
import { Input } from "src/components/shadcn/ui/input";


export default function Component() {
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 3;
    const totalImages = 9; // 예시로 9개의 이미지가 있다고 가정
    const totalPages = Math.ceil(totalImages / imagesPerPage);
  
    const handlers = useSwipeable({
      onSwipedLeft: () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1)),
      onSwipedRight: () => setCurrentPage(prev => Math.max(prev - 1, 0)),
    });
  
    const renderImageGrid = () => {
      const startIndex = currentPage * imagesPerPage;
      const endIndex = Math.min(startIndex + imagesPerPage, totalImages);
      return Array.from({ length: endIndex - startIndex }, (_, index) => (
        <div key={startIndex + index} className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg relative">
          <ImageIcon className="h-8 w-8 text-gray-400" />
          <Button variant="ghost" size="icon" className="absolute top-1 right-1">
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      ));
    };
  return (
    <div className="mx-auto max-w-md p-4 border border-gray-200 rounded-lg">


      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">사진/음성 관리</div>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2"></div>
        <div className="text-center text-sm">
          김고앙<br />보험설계사, 자동차판업
        </div>
      </div>

      <div className="relative mb-6" {...handlers}>
        <div className="grid grid-cols-3 gap-4">
          {renderImageGrid()}
        </div>
        {currentPage > 0 && (
          <Button variant="ghost" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2" onClick={() => setCurrentPage(prev => prev - 1)}>
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
        )}
        {currentPage < totalPages - 1 && (
          <Button variant="ghost" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2" onClick={() => setCurrentPage(prev => prev + 1)}>
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="flex-grow">
            <Input placeholder="사진 등록" className="w-full" />
          </div>
          <Button variant="outline">카메라/갤러리</Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex-grow">
            <Input placeholder="목소리 등록" className="w-full" />
          </div>
          <Button variant="outline">녹음</Button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-4">
        <PlayIcon className="h-5 w-5" />
        <div className="text-sm">00:00 / 00:20</div>
        <div className="text-sm">삭제</div>
      </div>

      <Button className="w-full">대화 보기</Button>
    </div>
  );
}