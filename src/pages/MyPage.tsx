import {
  Dock,
  Image,
  ImagePlay,
  MailOpen,
  MicVocal,
  MoveLeft,
  Send,
  WalletCards,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import IconLink from "src/components/common/link/IconLink";
import { Avatar, AvatarFallback } from "src/components/shadcn/ui/avatar";
import sample from "src/assets/images/avartar_sample.jpg";

export default function Component() {
  const IconLinkList = [
    {
      id: 1,
      to: "#",
      text: "기본정보",
      icon: <Dock className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />,
    },
    {
      id: 2,
      to: "#",
      text: "예약 발송함",
      icon: (
        <MailOpen className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
      ),
    },
    {
      id: 3,
      to: "#",
      text: "보낸 카드함",
      icon: <Send className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />,
    },
    {
      id: 4,
      to: "#",
      text: "마이앨범 관리",
      icon: <Image className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />,
    },
    {
      id: 5,
      to: "#",
      text: "사진/음성 관리",
      icon: (
        <ImagePlay className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
      ),
    },
    {
      id: 6,
      to: "#",
      text: "결제수단 정보",
      icon: (
        <WalletCards className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
      ),
    },
  ];

  return (
    <div className="w-full bg-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <MoveLeft className="w-6 h-6" />
          </Link>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            My Page
          </h2>
        </div>
        <div className="flex items-center mb-6">
          <Avatar className="mr-4 h-20 w-20">
            <img src={sample} alt="User Avatar" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <MicVocal className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                John Doe
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6 dark:bg-gray-900 flex items-center justify-center">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  내카드
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  7장
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">전송</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  21건
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  포인트
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                  50점
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {IconLinkList.map((item, index) => (
            <IconLink to={item.to} text={item.text}>
              {item.icon}
            </IconLink>
          ))}
        </div>
      </div>
    </div>
  );
}
