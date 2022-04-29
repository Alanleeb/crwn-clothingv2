import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems?.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems?.find(
        (cartItem) => cartItem.id === productToRemove.id
      );

      if(existingCartItem.quantity === 1) {
          return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
      }


    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}

export const clearAllCartItems = (cartItems, productToRemove) => cartItems.filter(cartItem => cartItem.id !== productToRemove.id);




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    checkoutTotal: 0
})



export const CartProvider = (({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [checkoutTotal, setCheckoutTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const cartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setCheckoutTotal(cartTotal)
    }, [cartItems])

  const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
      setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (productToRemove) => {
      setCartItems(clearAllCartItems(cartItems, productToRemove))
  }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, checkoutTotal, removeItemFromCart, clearItemFromCart}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
})











