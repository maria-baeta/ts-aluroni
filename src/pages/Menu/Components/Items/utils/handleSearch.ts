export const handleSearch = (search: string, title: string) => {
  const regex = new RegExp(search, "i");
  return regex.test(title);
};
