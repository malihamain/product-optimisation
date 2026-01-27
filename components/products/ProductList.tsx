"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import { ProductSort } from "./ProductSort";

interface ProductListProps {
  products: Product[];
}

type SortOrder = "price-asc" | "price-desc";

export function ProductList({ products }: ProductListProps) {
  const [category, setCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("price-asc");

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))).sort(),
    [products]
  );

  const visibleProducts = useMemo(() => {
    let list = products;

    if (category !== "all") {
      list = list.filter((product) => product.category === category);
    }

    const sorted = [...list].sort((a, b) =>
      sortOrder === "price-asc" ? a.price - b.price : b.price - a.price
    );

    return sorted;
  }, [products, category, sortOrder, products]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <ProductFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
        <ProductSort value={sortOrder} onChange={setSortOrder} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

