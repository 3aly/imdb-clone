import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import React from "react";
import { IMAGES } from "../../../assets";

type ImdbRatingProps = {
  rating: number;
};
export const ImdbRating = ({ rating }: ImdbRatingProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      paddingRight={3}
      alignItems={"center"}
      sx={{
        // display: "flex",
        // flexDirection: "row",
        background: "green",
        // paddingRight: 4,
        // alignItems: "space-between",
        // alignContent: "space-between",
        // justifyContent: "space-between",
      }}
    >
      <SvgIcon>
        {/* Embed the PNG image using the <image> element */}
        <image href={IMAGES.imdb} width="24" height="24" />
      </SvgIcon>

      <Typography variant="subtitle1" color="textSecondary">
        {rating.toFixed(1)}/10.0
      </Typography>
    </Box>
  );
};
