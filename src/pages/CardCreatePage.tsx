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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "src/components/shadcn/ui/form";
import { Input } from "src/components/shadcn/ui/input";
import { Label } from "src/components/shadcn/ui/label";
import { Textarea } from "src/components/shadcn/ui/textarea";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  name: string;
  email: string;
  address: string;
  detailAddress: string;
  phone: string;
  officePhone: string;
  greeting: string;
}

export default function CardCreatePage() {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "이름은 1글자 이상 되어야 합니다.",
    }),
    email: z.string().email(),
    address: z.string(),
    detailAddress: z.string(),
    phone: z
      .string()
      .min(1, { message: "연락처는 필수 입력 항목입니다." })
      .regex(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, {
        message: "유효한 전화번호 형식이 아닙니다. (예: 010-1234-5678)",
      }),
    officePhone: z
      .string()
      .min(1, { message: "연락처는 필수 입력 항목입니다." })
      .regex(/^(0[2-7][0-9]{1,2}-?[0-9]{3,4}-?[0-9]{4})$/, {
        message:
          "유효한 전화번호 형식이 아닙니다. (예: 02-1234-5678 또는 010-1234-5678)",
      }),
    greeting: z
      .string()
      .max(1000, { message: "1000글자를 초과할 수 없습니다." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      detailAddress: "",
      phone: "",
      officePhone: "",
      greeting: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);
  };

  const onSaveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-full">
            <CardContent className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent className="-ml-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-5/6 lg:basis-5/6"
                    >
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
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>성명</FormLabel>
                      <FormControl>
                        <Input placeholder="성명 입력" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="officePhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="연락처 입력" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>모바일</FormLabel>
                      <FormControl>
                        <Input placeholder="핸드폰번호 입력" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="greeting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>인사말</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="인사말 입력"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-2">
              <CancelButton className="flex-1" />
              <Button variant="outline" className="flex-1">
                미리보기
              </Button>
              <SaveButton className="flex-1" onClick={onSaveButtonClick} />
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
