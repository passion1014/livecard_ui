import { PencilIcon, FilePlus2 } from "lucide-react";
import React from "react";
import CancelButton from "src/components/common/button/CancelButton";
import SaveButton from "src/components/common/button/SaveButton";
import { Button } from "src/components/shadcn/ui/button";
import { Card, CardContent, CardFooter } from "src/components/shadcn/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "src/components/shadcn/ui/carousel";
import { Input } from "src/components/shadcn/ui/input";
import { Label } from "src/components/shadcn/ui/label";
import { Textarea } from "src/components/shadcn/ui/textarea";

export default function CardCreatePage() {
  return (
    <div>
      <Card className="w-full">
        <CardContent className="space-y-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-5/6 lg:basis-5/6">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-0"
            >
              <FilePlus2 className="h-4 w-4" />
              추가하기
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-0"
            >
              <PencilIcon className="h-4 w-4" />
              수정하기
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">성명</Label>
            <Input id="name" placeholder="성명 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">연락처</Label>
            <Input id="contact" placeholder="연락처 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">모바일</Label>
            <Input id="mobile" placeholder="핸드폰번호 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">인사말</Label>
            <Textarea
              id="message"
              placeholder="인사말 입력"
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-2">
          <CancelButton className="flex-1" />
          <Button variant="outline" className="flex-1">
            미리보기
          </Button>
          <SaveButton className="flex-1" />
        </CardFooter>
      </Card>
    </div>
  );
}
