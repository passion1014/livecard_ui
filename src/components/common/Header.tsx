import { Button } from "../shadcn/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../shadcn/ui/sheet";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../shadcn/ui/avatar";

const Header = () => {
  return (

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


  );
};


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



export default Header;
