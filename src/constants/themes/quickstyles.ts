import { Layout } from "../../types";

export const hiddenSmall = { display: { xs: "none", md: "flex" } };
export const hiddenBig = { display: { xs: "flex", md: "none" } };
export const responsiveIcons = { fontSize: { xs: 16, sm: 16, md: 25, lg: 25 } };
export const responsiveGrid = { xs: 0, sm: 9, md: 2, lg: 0 };
export const responsiveGap = { xs: 0, sm: 1, md: 1, lg: 2 };
export const layouts: { [key: string]: Layout } = {
  row: { flexDirection: "row", display: "flex" },
  col: { flexDirection: "column", display: "flex" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyStart: { justifyContent: "flex-start" },
  justifyEnd: { justifyContent: "flex-end" },
  xCentered: { justifyContent: "center" },
  yCentered: { alignItems: "center" },
  alignedEnd: { alignItems: "flex-end" },
  alignStart: { alignItems: "flex-start" },
  flexed: { flex: 1 },
  allCentered: { justifyContent: "center", alignItems: "center" },
  selfStart: { alignSelf: "flex-start" },
  selfCenter: { alignSelf: "center" },
  contentStart: { alignContent: "flex-start" },
  contentCenter: { alignContent: "center" },
};
