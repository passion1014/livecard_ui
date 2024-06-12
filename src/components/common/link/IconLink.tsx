import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface IconLinkProps {
  to: string;
  text: string;
  children?: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ to, text, children }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      <div className="flex items-center">
        {children}
        <span className="text-gray-900 dark:text-gray-50">{text}</span>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </Link>
  );
};

export default IconLink;
