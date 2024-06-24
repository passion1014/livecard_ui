import { HomeIcon, BellIcon, XIcon, ImageIcon, HeartIcon, EditIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "src/components/shadcn/ui/button";

export default function Component() {
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

      <div className="mb-4 text-sm font-medium">
        줄거리가반 보리 기능 추가
      </div>

      {[1, 2].map((item) => (
        <div key={item} className="mb-6">
          <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg mb-2">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <HeartIcon className="h-4 w-4 mr-1" />
                좋아요
              </Button>
              <Button variant="ghost" size="sm">
                <EditIcon className="h-4 w-4 mr-1" />
                수정
              </Button>
              <Button variant="ghost" size="sm">
                <SendIcon className="h-4 w-4 mr-1" />
                공유
              </Button>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            유형 : 보험설계서 / 내네임 : 씨이
          </div>
          <div className="text-xs text-gray-500">
            정보 : 이야기 재해구
          </div>
        </div>
      ))}
    </div>
  );
}