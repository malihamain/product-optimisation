# Product Page Optimisation

Small Next.js app that lists products from `https://dummyjson.com/products` and shows a simple product page for each item.

### What you can do

- See a **list of products** with title, price, short description, and category.
- **Filter** products by category.
- **Sort** products by price (low → high / high → low).
- Click a product to open its **detail page** with:
  - Image carousel (big image + thumbnails + arrows)
  - Full description
  - Price
  - Category
  - Availability (in stock / out of stock)

### How to run it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Where things live

- `app/page.tsx` – home page, shows the product list.
- `app/products/page.tsx` – same list under `/products`.
- `app/products/[id]/page.tsx` – product detail page.
- `components/products/` – cards, filter, sort, carousel.
- `lib/products.ts` – fetches data from DummyJSON.

### For reviewers

Start at `/` (or `/products`), click a product, and you’ll see the required carousel, title, description, price, and availability badge. The code is intentionally small and straightforward so it’s easy to follow.

- Maliha A Rahmani, 2026
