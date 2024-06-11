import React from "react";

const menuList = [
  { text: "메뉴 1", to: "#", icon: ClipboardIcon },
  { text: "메뉴 2", to: "#", icon: ClipboardIcon },
  { text: "Menu 3", to: "#", icon: ClipboardIcon },
  { text: "Menu 4", to: "#", icon: ClipboardIcon },
  { text: "Menu 5", to: "#", icon: ClipboardIcon },
];

export default menuList;

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
