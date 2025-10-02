import type { SVGProps } from "react";

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2a2.5 2.5 0 0 1 5 0h0a2.5 2.5 0 0 1 2.5 2.5v3.5A2.5 2.5 0 0 1 14.5 10h0a2.5 2.5 0 0 1-5 0h0a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 9.5 2" />
      <path d="M7 10v8.5A2.5 2.5 0 0 0 9.5 21h5a2.5 2.5 0 0 0 2.5-2.5V10" />
      <path d="M8 14h8" />
      <path d="M8 17h8" />
    </svg>
  );
}

export function BoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 15.5c0-3-1.5-5.5-4-5.5s-4 2.5-4 5.5c0 3-1.5 5.5-4 5.5s-4-2.5-4-5.5c0-3 1.5-5.5 4-5.5s4 2.5 4 5.5" />
    </svg>
  );
}
