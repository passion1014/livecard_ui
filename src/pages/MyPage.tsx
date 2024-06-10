/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MjXgD04HSoW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

//import { Avatar, AvatarFallback } from "../../../  ../../../ @/components/ui/avatar";

import { Avatar, AvatarFallback } from "../../@/components/ui/avatar";
import { Button } from "../../@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../../@/components/ui/sheet";
import React from "react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 items-center justify-between bg-gray-900 px-4 text-white md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link to="#">
                  <MountainIcon className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="grid gap-2 py-6">
                  <Link
                    to="#"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Menu 1
                  </Link>
                  <Link
                    to="#"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Menu 2
                  </Link>
                  <Link
                    to="#"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Menu 3
                  </Link>
                  <Link
                    to="#"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Menu 4
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </Button>
          <Link to="#" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <img src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">
              <div>John Doe</div>
              <div
                className="text-gray-400"
                onClick={() => window.open("", "_blank")}
              >
                ID: 12345
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="hidden h-full bg-gray-100 p-4 lg:block">
          <nav className="grid gap-2">
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-gray-900 transition-colors hover:bg-gray-300"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Menu 1</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
            >
              <LayoutGridIcon className="h-5 w-5" />
              <span>Menu 2</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
            >
              <ClipboardIcon className="h-5 w-5" />
              <span>Menu 3</span>
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
            >
              <UsersIcon className="h-5 w-5" />
              <span>Menu 4</span>
            </Link>
          </nav>
        </div>
        <div className="flex-1 bg-gray-50 p-6">
          <div className="w-full bg-white py-6">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between mb-6">
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <div className="w-6 h-6" />
                </Link>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  My Page
                </h2>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <div className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        전송
                      </p>
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
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      기본정보
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                  to="#"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      예약 발송함
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      보낸 카드함
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                  to="#"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      마이앨범 관리
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      사진/음성 관리
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      결제수단 정보
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-900 dark:text-gray-50">
                      설정
                    </span>
                  </div>
                  <div className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
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

function ClipboardIcon(
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function HomeIcon(
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutGridIcon(
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function MenuIcon(
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UsersIcon(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
