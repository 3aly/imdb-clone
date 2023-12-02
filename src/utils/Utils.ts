export const handleLinkClick = (url: string) => {
  // Open the link in a new tab/window
  window.open(url, "_blank");
};

export function getGenreNameById(
  genreId: number,
  genreList: []
): string | undefined {
  console.log("genreId", genreId);
  const genre: { name: string } = genreList.find(
    (genre: { id: number }) => genre.id === genreId
  );
  if (genre) {
    return genre?.name;
  } else {
    return "";
  }
}
