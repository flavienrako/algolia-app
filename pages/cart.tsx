import React from "react";
import Layout from "@components/layout";
import Card from "@components/cart";

const Cart: React.FC = () => {
  return (
    <Layout title="Your Cart">
      <Card />
    </Layout>
  );
};

export default Cart;
