import Link from "next/link";
import { fetchProductById } from "@/lib/products";
import { ImageCarousel } from "@/components/products/ImageCarousel";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await fetchProductById(id);

  const imageSources = Array.from(
    new Set(
      [product.thumbnail, ...(product.images ?? [])].filter(
        (src): src is string => Boolean(src),
      ),
    ),
  );

  return (
    <main>
      <p style={{ marginBottom: "0.75rem" }}>
        <Link href="/" style={{ color: "#2563eb" }}>
          Back to products
        </Link>
      </p>

      <h1>{product.title}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        <ImageCarousel images={imageSources} alt={product.title} />

        <section
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0 }}>
            {product.description}
          </p>
          <p style={{ margin: "0.5rem 0 0", fontSize: 18, fontWeight: 600 }}>
            ${product.price.toFixed(2)}
          </p>
          <p style={{ margin: "0.25rem 0 0", fontSize: 14, color: "#6b7280" }}>
            Category: {product.category}
          </p>
          <p style={{ margin: "0.25rem 0 0", fontSize: 14, color: "#6b7280" }}>
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>
        </section>
      </div>
    </main>
  );
}
