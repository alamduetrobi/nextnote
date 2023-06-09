/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export const ProductItem = ({ product }) => {
  return (
    <div className="card  items-center justify-center">
      <Link
        className=" mt-3 snap-center flex w-full items-center justify-center"
        href={`/product/${product.slug}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow  p-3"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button className=" primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};
