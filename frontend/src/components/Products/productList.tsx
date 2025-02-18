import { Card } from '../Card/card';
import { Product } from '../Card/types';

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}