import React from "react";

function EmailIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      className={className}
      {...props}
    >
      <path
        stroke="#249FA0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m22.167 18.88-6.643-6m-5.714 0-6.643 6m-.5-11 8.165 5.715c.66.463.991.695 1.351.784a2 2 0 0 0 .967 0c.36-.09.69-.32 1.352-.784l8.165-5.715m-15.2 13h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162v-6.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311c-.642-.327-1.482-.327-3.162-.327h-10.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.31C2.667 7.16 2.667 8 2.667 9.68v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.31c.643.328 1.483.328 3.163.328"
      ></path>
    </svg>
  );
}

export default EmailIcon;
