import { Label } from "@radix-ui/react-label";
import {
  CircleDollarSign,
  HandCoins,
  HomeIcon,
  NotebookPen,
  PlayIcon,
} from "lucide-react";
import React from "react";
import { Button } from "src/components/shadcn/ui/button";

export default function CardPreviewPage() {
  return (
    <div className="mx-au                to p-4 space-y-4">
      <header className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md">
        <HomeIcon className="h-8 w-8" />
        <div className="flex-1">
          <h1 className="text-xl font-bold">회사명</h1>
          <p className="text-sm text-gray-500">For you</p>
        </div>
      </header>
      <div className="flex justify-center items-center bg-gray-200 h-64 rounded-md">
        <PlayIcon className="h-16 w-16" />
      </div>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="w-24">
          <NotebookPen />
          &nbsp;설계
        </Button>
        <Button variant="outline" className="w-24">
          <HandCoins />
          &nbsp;투자
        </Button>
        <Button variant="outline" className="w-24">
          <CircleDollarSign />
          &nbsp;절세
        </Button>
      </div>
      <form className="space-y-4">
        <div className="space-y-2 flex items-center flex-row">
          <Label className="inline-block w-1/4">이름</Label>
          <input
            id="fax"
            type="text"
            className="border-b border-gray-400 focus:border-blue-500 outline-none px-3 py-2 w-full"
            value="김정민"
            readOnly
          />
        </div>
        <div className="space-y-2 flex items-center">
          <Label htmlFor="phone" className="inline-block w-1/4">
            전화
          </Label>
          <input
            id="fax"
            type="text"
            className="border-b border-gray-400 focus:border-blue-500 outline-none px-3 py-2 w-full"
            value="02-1234-1234"
            readOnly
          />
        </div>
        <div className="space-y-2 flex items-center">
          <Label htmlFor="fax" className="inline-block w-1/4">
            팩스
          </Label>
          <input
            id="fax"
            type="text"
            className="border-b border-gray-400 focus:border-blue-500 outline-none px-3 py-2 w-full"
            value="02-3123-1234"
            readOnly
          />
        </div>
        <div className="space-y-2 flex items-center">
          <Label htmlFor="email" className="inline-block w-1/4">
            이메일
          </Label>
          <input
            id="fax"
            type="text"
            className="border-b border-gray-400 focus:border-blue-500 outline-none px-3 py-2 w-full"
            value="jmkim7707@gmail.com"
            readOnly
          />
        </div>
        <Button type="submit" className="w-full">
          전송하기
        </Button>
      </form>
    </div>
  );
}
