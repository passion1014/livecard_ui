import { Button } from "../../shadcn/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../../shadcn/ui/sheet";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../../shadcn/ui/avatar";
import menuList from "../menu/menuList";

const Header = () => {
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
  );
};

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

export default Header;
