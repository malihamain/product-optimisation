"use client";

interface ProductFilterProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

export function ProductFilter({ categories, value, onChange }: ProductFilterProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 12 }}>Category</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{ padding: "0.4rem 0.6rem" }}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}

