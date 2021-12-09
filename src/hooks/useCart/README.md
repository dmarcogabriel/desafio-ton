# useCart Hook

A custom hook that implements cart context, and also the cart state, with this hook we can 
add and remove products and get product list and total price.

## Usage

```js
import {useCart} from 'src/hooks';


// Remember you can only use a hook inside a react component
...
  const {productList, addProduct, removeProductById, totalPrice, resetCart} = useCart();

  addProduct(newProduct);
...
```

## API

Here its described each property returned from `useCart` hook:


### States

| State             | Description                     | Type   | Default |
| ----------------- | ------------------------------- | ------ | ------- |
| **`productList`** | Products added to cart          | Ship[] | []      |
| **`totalPrice`**  | Total price of products in cart | number | 0       |

## Functions

### addProduct

* Params: Ship
* Return: void

Used to add a product to the cart, and also update the `totalPrice` state.

---

### removeProductById

* Params: string
* Return: void

Used to remove a product from the cart using it's id.

---

### resetCart

* Params: __none__
* Return: void

Used to remove all products in cart and set `totalPrice` to 0.