import items from "../items.json";

export const hadleOrder = (order: string, unorderedList: typeof items) => {
  switch (order) {
    case "porcao":
      return unorderedList.sort((itemA, itemB) =>
        itemA.size > itemB.size ? 1 : -1
      );
    case "qtd_pessoas":
      return unorderedList.sort((itemA, itemB) =>
        itemA.serving > itemB.serving ? 1 : -1
      );
    case "preco":
      return unorderedList.sort((itemA, itemB) =>
        itemA.price > itemB.price ? 1 : -1
      );
    default:
      return unorderedList;
  }
};
