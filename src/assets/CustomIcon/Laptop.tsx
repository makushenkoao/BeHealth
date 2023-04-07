import React from "react";
import { SvgIcon } from "@mui/material";
import { SvgIconsProps } from "~/common";

export const Laptop = (props: SvgIconsProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M4.80796 27.9999C4.11196 27.9999 3.44796 27.7279 2.9453 27.2319C2.4373 26.7319 2.15596 26.0639 2.15063 25.3506C2.14663 24.9319 2.2453 24.5079 2.4373 24.1306L3.99996 21.0173V9.33325C3.99996 7.12792 5.79463 5.33325 7.99996 5.33325H24C26.2053 5.33325 28 7.12792 28 9.33325V21.0173L29.5653 24.1359C29.884 24.7706 29.9373 25.4933 29.7146 26.1693C29.492 26.8453 29.0186 27.3946 28.3813 27.7146C28.0133 27.9026 27.552 27.9759 27.1653 27.9999H4.82663C4.81996 27.9999 4.8133 27.9999 4.80796 27.9999ZM6.15596 22.6666L4.81863 25.3306L27.1733 25.3333L25.8426 22.6666H6.15596ZM6.66663 19.9999H25.3333V9.33325C25.3333 8.59859 24.736 7.99992 24 7.99992H7.99996C7.2653 7.99992 6.66663 8.59859 6.66663 9.33325V19.9999Z"
        fill="#008769"
      />
    </SvgIcon>
  );
};
