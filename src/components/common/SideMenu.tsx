import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {


    return <div className="hidden h-full bg-gray-100 p-4 lg:block">
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

export default SideMenu;