import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const CartContext = createContext({
    totalItems: 0,
    items: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

const NOT_FOUND = -1;

export default function CartContextProvider({ children }) {
    const [items, setItems] = useState([])

    function addToCart(item) {

        const cartItemIndex = items.findIndex((element) => element.id === item.id);

        if (cartItemIndex !== NOT_FOUND) {
            const currentItems = [...items];
            currentItems[cartItemIndex].amount = currentItems[cartItemIndex].amount + 1;
            setItems(currentItems);
        }

        else {
            setItems((currentItems) => [...currentItems, { ...item, amount: 1 }]);
        }
    }

    function removeFromCart(id) {

        const currentItems = [...items];
        const itemToRemove = currentItems.find((item) => item.id === id);
        if (itemToRemove && itemToRemove.amount > 1) {
            itemToRemove.amount = itemToRemove.amount - 1;
            setItems(currentItems);
        } else {
            setItems((currentItems) => currentItems.filter((item) => item.id !== id))
        }
    }


    const total = items.reduce((accumulator, item) => {
        const { amount } = item;
        return accumulator + amount;
    }, 0);

    let totalPrice = items.reduce((accumulator, item) => {
        const { price, amount } = item;
        return accumulator + price * amount;
    }, 0);



    const value = {
        totalItems: total,
        items,
        totalAmount: totalPrice,
        taxesAmount: totalPrice * 1.21,
        addToCart,
        removeFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
    return useContext(CartContext)
}