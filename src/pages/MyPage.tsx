/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MjXgD04HSoW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

//import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "src/components/shadcn/ui/avatar";

export default function Component() {
  return (
    <div className="w-full bg-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            My Page
          </h2>
        </div>
        <div className="flex items-center mb-6">
          <Avatar className="mr-4 h-20 w-20">
            <img src="/placeholder.svg" alt="User Avatar" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <MicIcon className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
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
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">기본정보</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <MailOpenIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">
                예약 발송함
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <SendIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">
                보낸 카드함
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">
                마이앨범 관리
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">
                사진/음성 관리
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <CreditCardIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">
                결제수단 정보
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <SettingsIcon className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-50">설정</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ChevronRightIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CreditCardIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function ImageIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function MailOpenIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function MicIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function SendIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SettingsIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
