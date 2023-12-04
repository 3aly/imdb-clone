export const handleLinkClick = (url: string) => {
  // Open the link in a new tab/window
  window.open(url, "_blank");
};

export function getGenreNameById(
  genreId: number,
  genreList: Array<{ id: number; name: string }>
): string {
  const genre = genreList.find((genre) => genre?.id === genreId)?.name;
  if (genre) {
    return genre;
  } else {
    return "";
  }
}
