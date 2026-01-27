import { fetchProducts } from "@/lib/products";
import { ProductList } from "@/components/products/ProductList";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main>
      <h1>Products</h1>
      <p>List of Products.</p>

      <ProductList products={products} />
    </main>
  );
}
