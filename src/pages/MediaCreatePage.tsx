import { HomeIcon, BellIcon, XIcon, ImageIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "src/components/shadcn/ui/button";
import { Input } from "src/components/shadcn/ui/input";

export default function Component() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 여기에 파일 처리 로직을 추가하세요
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="mx-auto max-w-md p-4 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <HomeIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <XIcon className="h-5 w-5" />
        </Button>
      </div>

      <Input
        className="mb-4"
        placeholder="비디어 카드 이름을 입력하여 추가?"
      />

      <div className="mb-4">
        <div id="content" className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg mb-2">
          <ImageIcon className="h-12 w-12 text-gray-400" />
        </div>
        <Button variant="outline" onClick={handleFileSelect} className="w-full">
          사진찾기
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      <div className="relative mb-4">
        <Button variant="ghost" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <div className="flex justify-center space-x-2 overflow-x-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-16 h-16 bg-gray-200 flex-shrink-0 rounded-lg"></div>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2">
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex space-x-2">
        <Button variant="outline" className="flex-1">위스</Button>
        <Button variant="outline" className="flex-1">저장</Button>
      </div>
    </div>
  );
}