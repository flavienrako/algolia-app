import Button from "@components/button";
import React, { useCallback } from "react";
import { Highlight } from "react-instantsearch-dom";
import { Hit } from "react-instantsearch-core";
import { ProductType } from "src/interfaces";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom, sumCart } from "@context/cart";

const Card: React.ComponentType<{ hit: Hit<ProductType> }> = ({ hit }) => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const sum = useRecoilValue(sumCart);

  const toggleCart = useCallback(() => {
    setCart((products) => {
      const index = products.findIndex(
        ({ objectID }) => objectID === hit.objectID
      );
      if (index === -1) return [...products, hit];
      return products.filter(({ objectID }) => objectID !== hit.objectID);
    });
  }, [hit]);

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg"
        src={`${hit.image}`}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
          <Highlight attribute="name" hit={hit} />
        </h5>

        <div className="">
          <span className="font-bold text-gray-900 dark:text-white mx-1">
            ${hit.salePrice}
          </span>
          <br />
          Disount
          <span className="text-1xl font-bold text-gray-900 dark:text-white">
            {" "}
            ${sum >= 200 && hit.salePrice >= 250 ? hit.salePrice / 2 : 0}
          </span>
          <div>
            <Button onClick={toggleCart}>
              {cart.find(({ objectID }) => objectID === hit.objectID)
                ? "Remove from cart"
                : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
