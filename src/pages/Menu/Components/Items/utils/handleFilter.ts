export const handleFilter = (filter: number | null, id: number) => {
  if (filter !== null) return filter === id;
  return true;
};
