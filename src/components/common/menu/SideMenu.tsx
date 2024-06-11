import React from "react";
import { Link } from "react-router-dom";
import menuList from "./menuList";

const SideMenu = () => {
  return (
    <div className="hidden h-full bg-gray-100 p-4 lg:block">
      <nav className="grid gap-2">
        {menuList.map((item, index) => (
          <Link
            to={item.to}
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-gray-900 transition-colors hover:bg-gray-300"
          >
            <item.icon />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideMenu;
