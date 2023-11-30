export const handelSearch = (Value, setText) => {
  setText(Value);
};
export const handleLinkClick = (url: string) => {
  // Open the link in a new tab/window
  window.open(url, "_blank");
};
