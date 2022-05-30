import { atom, selector } from "recoil";
import { ProductType } from "src/interfaces";

export const cartAtom = atom<ProductType[]>({
  key: "cart",
  default: [],
});

export const sumCart = selector<number>({
  key: "sum-cart",
  get: ({ get }) => {
    const products = get(cartAtom);
    return products.reduce((acc, { salePrice }) => salePrice + acc, 0);
  },
});

export const cartReduced = selector({
  key: "cart-reduced",
  get: ({ get }) => {
    const products = get(cartAtom);
    const sum = get(sumCart);
    return products.map((product) => {
      return {
        ...product,
        reducedPrice:
          sum >= 200 && product.salePrice >= 250 ? product.salePrice / 2 : 0,
      };
    });
  },
});
