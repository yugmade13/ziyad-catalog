type Props = {
  categories: string[];
  selected: string[];
  onToggle: (category: string) => void;
  onReset: () => void;
};

export function ProductCategoryFilter({
  categories,
  selected,
  onToggle,
  onReset,
}: Props) {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">Categories</h2>
      <form className="w-full overflow-x-auto flex gap-2" onReset={onReset}>
        <input
          type="reset"
          value="All"
          className="btn btn-outline btn-square btn-sm"
        />

        {categories.map((cat) => (
          <input
            key={cat}
            type="checkbox"
            aria-label={cat}
            className="btn btn-outline btn-sm capitalize
              checked:bg-black checked:text-white checked:border-0"
            checked={selected.includes(cat)}
            onChange={() => onToggle(cat)}
          />
        ))}
      </form>
    </>
  );
}
