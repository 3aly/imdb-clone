import { Box, SvgIcon } from "@mui/material";
import React from "react";
import { IMAGES } from "../../../assets";

export const LogoIcon = () => {
  return (
    <SvgIcon
      sx={{
        display: "flex",
        backgroundColor: "blue",
        padding: 3,
        justifyContent: "center",
      }}
    >
      {/* Embed the PNG image using the <image> element */}
      {/* <image href={IMAGES.logo} width="24" height="24" /> */}
    </SvgIcon>
  );
};
