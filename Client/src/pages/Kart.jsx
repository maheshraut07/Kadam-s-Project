import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
const Kart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Black Grapes',
            image: '/images/black-grapes.jpg',
            pricePerKg: 120,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Green Grapes',
            image: '/images/green-grapes.jpg',
            pricePerKg: 100,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Red Grapes',
            image: '/images/red-grapes.jpg',
            pricePerKg: 150,
            quantity: 3,
        },
    ]);

    // Function to update the quantity of a cart item
    const updateQuantity = (id, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.pricePerKg * item.quantity,
        0
    );

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold text-center mb-6">Your Kart</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Cart Items Section */}
                <div className="flex-1">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md mb-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">₹{item.pricePerKg} per kg</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                            className="w-16"
                                            min={1}
                                        />
                                        <Button
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-600 bg-red-100"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold">
                                        ₹{item.pricePerKg * item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Summary Section */}
                <div className="w-full md:w-1/3 p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <p className="text-gray-500">Subtotal</p>
                        <p className="font-bold">₹{totalPrice}</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className="text-gray-500">Delivery Charges</p>
                        <p className="font-bold">₹50</p>
                    </div>
                    <div className="flex justify-between mb-4 border-t pt-2">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">₹{totalPrice + 50}</p>
                    </div>
                    <Button className="w-full bg-green-600 text-white py-2 rounded-md">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Kart;
