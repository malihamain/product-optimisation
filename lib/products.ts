export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const BASE_URL = "https://dummyjson.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products?limit=100`, {
    // cache heavily to reduce TTFB & FCP for repeat visitors
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 300 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

