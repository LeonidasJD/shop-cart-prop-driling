import { CartContext } from "../store/shopping-cart-context.jsx";
import { useContext } from "react";

export default function Cart({   }) {

  const cartCntx = useContext(CartContext);
  const {handleUpdateCart} = useContext(CartContext);


  const totalPrice = cartCntx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCntx.items.length === 0 && <p>No items in cart!</p>}
      {cartCntx.items.length > 0 && (
        <ul id="cart-items">
          {cartCntx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleUpdateCart(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateCart(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
