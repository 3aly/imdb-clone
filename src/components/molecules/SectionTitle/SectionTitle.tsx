import { Typography } from "@mui/material";

type SectionTitleProps = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography mb={5} variant={"h4"} component="div" color={"primary.dark"}>
      {title}
    </Typography>
  );
};
