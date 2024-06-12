import React from "react";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {/* Oops! The page you're looking for could not be found. */}
            페이지를 찾을 수 없습니다. 입력한 주소가 잘못되었거나 사용이 일시
            중단되어 요청하신 페이지를 찾을 수 없습니다.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="404 illustration"
            className="max-w-[200px] sm:max-w-[300px]"
          />
          <Link
            to="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundPage;
