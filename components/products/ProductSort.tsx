"use client";

type SortOrder = "price-asc" | "price-desc";

interface ProductSortProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 12 }}>Sort by price</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as SortOrder)}
        style={{ padding: "0.4rem 0.6rem" }}
      >
        <option value="price-asc">Low to High</option>
        <option value="price-desc">High to Low</option>
      </select>
    </label>
  );
}
