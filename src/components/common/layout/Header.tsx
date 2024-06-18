import { Button } from "../../shadcn/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../../shadcn/ui/sheet";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import menuList from "../menu/menuList";
import { MenuIcon, MountainIcon } from "lucide-react";
import useLoginUserStore from "src/stores/useLoginUserStore";
import { userApi } from "src/api/userApi";
import api from "src/api/api";


const Header = () => {
  const { loginUser } = useLoginUserStore();

  return (
    <header className="flex h-16 items-center justify-between bg-gray-900 px-4 text-white md:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
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
                <span className="sr-only">라이브 명함</span>
              </Link>
              <div className="grid gap-2 py-6">
                {menuList.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {item.text}
                  </Link>
                ))}
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
        {loginUser ?
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={loginUser?.profileImg} />
            </Avatar>
            <div className="text-sm font-medium">
              <div>{loginUser?.name}</div>
              <div
                className="text-gray-400"
                onClick={() => window.open("", "_blank")}
              ></div>
            </div>
          </div>
          : <Button asChild>
            <Link to="/login">로그인</Link>
          </Button>}
      </div>
    </header>
  );
};

export default Header;
