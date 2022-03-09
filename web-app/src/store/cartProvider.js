import CartContext from "./cart-context";
import { useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const SaveRemovefromLocalStorage = (array, sum) => {
  const stringfyObjectArray = array.map((element) => JSON.stringify(element));
  console.log(stringfyObjectArray);
  localStorage.setItem("cartProducts", stringfyObjectArray);
  localStorage.setItem("cartTotal", sum);
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount = 0;
    if (action.totalCartItems) {
      updatedTotalAmount = action.totalCartItems.reduce(
        (n, { price }) => n + price,
        0
      );
    } else {
      updatedTotalAmount = action.item.price * action.quantity;
    }

    const existingItemIndex = state.items.findIndex(
      (item) => item._id === action.item._id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        productCartTotal: existingItem.price + action.item.price,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    SaveRemovefromLocalStorage(updatedItems, updatedTotalAmount);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updatedtotalAmount = 0;
    let ItemsAfterDeletion = state.items;
    if (action.quantity >= 1) {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      updatedtotalAmount = state.totalAmount - existingItem.price;
    } else if (action.quantity === undefined) {
      ItemsAfterDeletion = state.items.filter((x) => x._id !== action.id);
    }
    SaveRemovefromLocalStorage(ItemsAfterDeletion, updatedtotalAmount);
    return {
      items: ItemsAfterDeletion,
      totalAmount: updatedtotalAmount,
    };
  } else if (action.type === "ONCHANGE") {
    console.log(action.item);
    console.log(action.quantity);
  }
};

const CartProvider = (props) => {
  const [productQuantities, SetProductQuantities] = useState([]);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addtoCartHandler = (item, quantity, totalCartItems) => {
    const existInCartAlready = productQuantities.some(
      (x) => x.prod_Id === item._id
    );
    if (!existInCartAlready) {
      let prod = {
        prod_Id: item._id,
        quantity: quantity,
        price: item.price * quantity,
      };
      let cartprodslist = [...productQuantities];
      cartprodslist.push(prod);
      SetProductQuantities(cartprodslist);
      totalCartItems = cartprodslist;
    }

    dispatchCartAction({
      type: "ADD",
      item: item,
      quantity: quantity,
      totalCartItems: totalCartItems,
    });
  };

  const removeItemfromCartHandler = (id, quantity) => {
    dispatchCartAction({ type: "REMOVE", id: id, quantity: quantity });
  };

  const getProdQtyhandler = (id) => {
    let quantity = 0;
    let price = 0;
    if (productQuantities.length > 0) {
      const prd = productQuantities.find((x) => x.prod_Id === id);
      if (prd) {
        quantity = prd.quantity;
        price = prd.price;
      }
    }
    return { quantity: quantity, price: price };
  };

  const productQuantityHandler = (expression, product, quantity) => {
    let ProdwithQuantity = {
      prod_Id: product._id,
      quantity: quantity,
      price: product.price * quantity,
    };
    const ItemExistInCart = cartState.items.some((x) => x._id === product._id);
    const prodsQuantities = productQuantities;
    const prd = prodsQuantities.find(
      (x) => x.prod_Id === ProdwithQuantity.prod_Id
    );

    switch (expression) {
      case "plus":
        if (ItemExistInCart) {
          if (prd) {
            const index = prodsQuantities.findIndex(
              (p) => p.prod_Id === prd.prod_Id
            );
            prodsQuantities[index] = ProdwithQuantity;
          } else {
            prodsQuantities.push(ProdwithQuantity);
          }
          SetProductQuantities(prodsQuantities);
          addtoCartHandler(product, quantity, prodsQuantities);
        }
        break;
      case "minus":
        if (quantity > 0) {
          if (ItemExistInCart) {
            if (prd) {
              const index = prodsQuantities.findIndex(
                (p) => p.prod_Id === prd.prod_Id
              );
              prodsQuantities[index] = ProdwithQuantity;
            }
            SetProductQuantities(prodsQuantities);
            removeItemfromCartHandler(product._id, quantity);
          }
        }
        break;
      default:
        dispatchCartAction({
          type: "ONCHANGE",
          item: product,
          quantity: quantity,
        });
        break;
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addtoCartHandler,
    removeItem: removeItemfromCartHandler,
    handleQuantity: productQuantityHandler,
    getProdQty: getProdQtyhandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
