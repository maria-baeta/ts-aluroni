import filters from "./filters.json";
import styles from "./Filters.module.scss";

type FiltersType = typeof filters[0];

export const Filters = () => {
  const selectedFilter = (option: FiltersType) => {
    return console.log(option);
  };

  return (
    <div className={styles.filters}>
      {filters.map((option: FiltersType) => (
        <button
          className={styles.filters__filter}
          key={option.id}
          onClick={() => selectedFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
