export const ITEM_PER_PAGE = 2;

export const parsePage = (value) => {
  const page = Number.parseInt(value, 10);
  return Number.isInteger(page) && page > 0 ? page : 1;
};
