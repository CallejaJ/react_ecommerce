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
    console.log(items);

    function addToCart(item) {

        const cartItemIndex = items.findIndex((element) => element.id === element.id);

        if (cartItemIndex != NOT_FOUND) {
            const currentItems = [...items];
            currentItems[cartItemIndex].amount = currentItems[cartItemIndex].amount + 1;
            setItems(currentItems);
        }

        else {
            setItems((currentItems) => [...currentItems, { ...item, amount: 1 }]);
        }
    }

    function removeFromCart(id) {

        const cartItemIndex = items.findIndex((element) => element.id === id.id);
        console.log(id);

        if (cartItemIndex !== NOT_FOUND) {
            const currentItems = [...items];
            if (currentItems[cartItemIndex].amount > 0) {
                currentItems[cartItemIndex].amount = currentItems[cartItemIndex].amount - 1;
                setItems(currentItems);
            }
        }
        else {
            setItems((currentItems) => [...currentItems, { ...id, amount: 1 }])
        }
    }

    const total = items.reduce((acc, item) => {
        const { amount } = item;
        return acc + amount;
    }, 0);

    const value = {
        totalItems: total,
        items,
        addToCart,
        removeFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCartContext() {
    return useContext(CartContext)
}