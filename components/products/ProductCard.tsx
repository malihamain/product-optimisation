import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [firstImage] = product.images;

  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {firstImage && (
        <div
          style={{ position: "relative", width: "100%", paddingBottom: "75%" }}
        >
          <Image
            src={firstImage}
            alt={product.title}
            fill
            sizes="(min-width: 768px) 240px, 50vw"
            style={{ objectFit: "cover", borderRadius: 4 }}
          />
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <h2 style={{ fontSize: 16, margin: 0 }}>{product.title}</h2>
        <p style={{ fontSize: 14, margin: 0 }}>
          {product.description.length > 80
            ? `${product.description.slice(0, 77)}...`
            : product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <span style={{ fontWeight: 600 }}>${product.price.toFixed(2)}</span>
          <span style={{ fontSize: 12, color: "#6b7280" }}>
            {product.category}
          </span>
        </div>
        <Link
          href={`/products/${product.id}`}
          style={{ marginTop: 4, fontSize: 14, color: "#2563eb" }}
        >
          View details
        </Link>
      </div>
    </article>
  );
}
