import { Typography } from "@mui/material";
import React from "react";

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Typography>{title}</Typography>;
};
