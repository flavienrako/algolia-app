import React, { useMemo } from "react";
import { cartReduced, sumCart } from "@context/cart";
import { useRecoilValue } from "recoil";

const Card: React.FC = () => {
  const cart = useRecoilValue(cartReduced);
  const sum = useRecoilValue(sumCart);

  const total = useMemo(
    () =>
      cart.reduce(
        (acc, { salePrice, reducedPrice }) => (reducedPrice || salePrice) + acc,
        0
      ),
    [cart]
  );

  return (
    <div>
      {cart.map(({ objectID, name, salePrice }) => (
        <div className="flex" key={objectID}>
          <h3 className="text-gray-900">{name}</h3>
          <div>
            <span className="font-bold text-gray-900 mx-1">$ {salePrice}</span>
            <span className="font-bold text-gray-900">
              Disount $ {sum >= 200 && salePrice >= 250 ? salePrice / 2 : 0}
            </span>
          </div>
        </div>
      ))}

      <div>
        <h3 className="text-3xl font-bold">
          Total: <span>$ {total.toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
