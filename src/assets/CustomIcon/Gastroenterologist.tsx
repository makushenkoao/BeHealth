import React from "react";
import { SvgIcon } from "@mui/material";
import { SvgIconsProps } from "~/common";

export const Gastroenterologist = (props: SvgIconsProps) => {
  return (
    <SvgIcon {...props} sx={{ width: "36px", height: "36px" }}>
      <path
        d="M17.25 3.75C16.3905 7.095 16.3905 9.579 17.25 11.2035C18.54 13.638 21.525 14.985 17.6805 18.234C13.836 21.4815 9.93898 18.756 7.53148 18.756C5.12548 18.756 3.01648 21.4665 3.01648 25.5C3.01648 28.1895 3.51148 30.4395 4.49998 32.25M22.488 3.75C21.408 7.7475 21.6525 10.281 23.2275 11.355C25.587 12.9645 25.7685 9.603 30.105 11.6025C34.443 13.602 33.315 20.5725 30.8205 24.162C28.326 27.75 23.001 31.377 18.006 30.75C13.011 30.1245 11.1555 24.015 10.512 24.015C9.86848 24.015 8.51098 24.0345 8.24698 26.5635C8.06848 28.248 8.57098 30.144 9.75298 32.25M26.733 21.2175C26.2995 22.512 25.5675 23.5035 24.5355 24.225C23.505 24.945 22.1955 25.371 20.6085 25.5"
        stroke="#F4FFF8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
