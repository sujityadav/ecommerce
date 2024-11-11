// ProductCard.js
import React from 'react';

const FeaturedProductCard = ({ product }) => (
  <div className="w-full">
    <article className="overflow-hidden rounded-lg border">
      <div className="relative">
        <img alt="Placeholder"  className="block h-[185px] w-full" src={product.imgUrl} />
        <div className="no-underline rounded-full text-grey-darker bg-[#f8f8f8] h-8 w-8 flex justify-center items-center absolute top-3 right-3">
          <i className="pi pi-heart hover:text-red-dark"></i>
        </div>
        <div className="no-underline rounded-full text-[12px] px-2 py-0.5 text-white bg-[#0585d5] flex justify-center items-center absolute -bottom-2 right-3">
          {product.discount}
        </div>
      </div>
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <div className="no-underline hover:underline text-black">
            {product.title}
          </div>
        </h1>
      </header>
      <p className="text-grey-darker text-sm p-2 md:p-4">
        {product.priceInfo}
      </p>
    </article>
    <>
    </>
  </div>
);

export default FeaturedProductCard;
