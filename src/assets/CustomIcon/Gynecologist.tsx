import React from "react";
import { SvgIcon } from "@mui/material";
import { SvgIconsProps } from "~/common";

export const Gynecologist = (props: SvgIconsProps) => {
  return (
    <SvgIcon {...props} sx={{ width: "36px", height: "36px" }}>
      <path
        d="M15 20.25V32.25M21.75 20.25V32.25M3 13.5C4.3665 12.7545 7.2465 13.2225 8.2965 14.454C9.3465 15.684 9.66 18.309 7.416 18.9735C5.172 19.638 3 16.734 3 13.5015V13.5ZM3 13.5C3 10.269 4.692 8.07443 7.5645 7.87943C9.48 7.74743 11.0475 7.84193 12.375 8.99993M33 13.467C33 16.6995 31.7625 19.6365 29.295 18.972C26.8275 18.3075 27.1725 15.6825 28.326 14.451C29.481 13.221 31.4985 12.72 33 13.467ZM33 13.467C33 10.236 32.289 8.07441 29.13 7.87791C27.024 7.74741 25.6875 8.15091 24.375 9.37491M24.0002 13.5C23.3072 18 21.7502 22.125 18.3752 22.125C15.0002 22.125 13.8752 18.375 12.7502 13.5C11.6252 8.625 12.7502 4.5 18.3752 4.5C24.0002 4.5 24.6902 9 24.0002 13.5Z"
        stroke="#F4FFF8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
