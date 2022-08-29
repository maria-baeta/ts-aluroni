/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { Item } from "./Item";
import items from "./items.json";
import styles from "./Items.module.scss";

interface INTERFACEITEMS {
  search: string;
  filter: number | null;
  order: string;
}

export const Items: FC<INTERFACEITEMS> = ({ search, filter, order }) => {
  const [list, setList] = useState(items);

  const handleSearch = (title: string) => {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  };

  const handleFilter = (id: number) => {
    if (filter !== null) return filter === id;
    return true;
  };

  const hadleOrder = (unorderedList: typeof items) => {
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

  useEffect(() => {
    const newList = items.filter(
      (item) => handleSearch(item.title) && handleFilter(item.category.id)
    );
    setList(hadleOrder(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
