import { fetchProducts } from "@/lib/products";
import { ProductList } from "@/components/products/ProductList";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main>
      <h1>Products</h1>
      <p>Browse products from the DummyJSON API.</p>
      <ProductList products={products} />
    </main>
  );
}
