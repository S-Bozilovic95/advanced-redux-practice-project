import { useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
  {
    id: "p1",
    title: "book1",
    price: 6,
    description: "first product",
  },
  {
    id: "p2",
    title: "book2",
    price: 16,
    description: "second product",
  },
  {
    id: "p3",
    title: "book3",
    price: 43,
    description: "third product",
  },
  {
    id: "p4",
    title: "book3",
    price: 102,
    description: "fourth product",
  },
];

const Products = (props) => {
  const [allProducts, setAllProducts] = useState(dummy_products);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {allProducts.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
