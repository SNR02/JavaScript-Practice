import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD_ITEM", id: 1, name: "Laptop" })}>
        Add Laptop
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name} - Quantity: {item.quantity}</span>
          <button onClick={() => dispatch({ type: "INCREMENT_QUANTITY", id: item.id })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_QUANTITY", id: item.id })}>
            -
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
