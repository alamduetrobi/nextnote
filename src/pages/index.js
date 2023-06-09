import Layout from '../../components/Layout';
import { ProductItem } from '../../components/ProductItem';

import dataitem from '../../utils/dataitem';

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {dataitem.products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </Layout>
    </>
  );
}
