import { mockProducts } from '@/data/products';
import { ProductList } from '@/components/Products/productList';

export default function Home() {
  return (
    <main>
      <h1>MUSH Beauty Shop</h1>
      <ProductList products={mockProducts} />
    </main>
  );
}