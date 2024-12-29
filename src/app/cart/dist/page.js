'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var solid_1 = require("@heroicons/react/20/solid"); // Importing correct icons
var link_1 = require("next/link");
var outline_1 = require("@heroicons/react/24/outline"); // Corrected path for Heroicons v2
var CartPage = function () {
    var _a = react_1.useState([]), cartItems = _a[0], setCartItems = _a[1];
    // Load cart items from localStorage when the page loads
    react_1.useEffect(function () {
        var savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);
    // Add or update item in the cart
    var addToCart = function (newItem) {
        setCartItems(function (prevItems) {
            var itemIndex = prevItems.findIndex(function (item) { return item.id === newItem.id; });
            if (itemIndex === -1) {
                // Item doesn't exist in cart, so add it with initial quantity 1
                var updatedItems = __spreadArrays(prevItems, [__assign(__assign({}, newItem), { quantity: 1 })]);
                localStorage.setItem('cart', JSON.stringify(updatedItems));
                return updatedItems;
            }
            else {
                // Item exists in cart, update the quantity
                var updatedItems = prevItems.map(function (item, index) {
                    return index === itemIndex ? __assign(__assign({}, item), { quantity: item.quantity + 1 }) : item;
                });
                localStorage.setItem('cart', JSON.stringify(updatedItems));
                return updatedItems;
            }
        });
    };
    // Update the quantity of an item in the cart
    var updateQuantity = function (id, quantity) {
        if (quantity < 1)
            return; // Avoid invalid quantities
        var updatedCart = cartItems.map(function (item) {
            return item.id === id ? __assign(__assign({}, item), { quantity: Math.max(quantity, 1) }) : item;
        } // Ensure quantity is at least 1
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    // Remove an item from the cart
    var removeItem = function (id) {
        var updatedCart = cartItems.filter(function (item) { return item.id !== id; });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    // Calculate the total price
    var calculateTotal = function () {
        var total = cartItems.reduce(function (total, item) {
            var price = parseFloat(item.price); // Ensure price is a number
            var quantity = item.quantity ? parseInt(item.quantity, 10) : 0; // Ensure quantity is a number
            if (isNaN(price) || isNaN(quantity)) {
                return total; // Skip invalid items by returning the previous total
            }
            return total + price * quantity;
        }, 0);
        return isNaN(total) ? '0.00' : total.toFixed(2); // Ensure it never returns NaN
    };
    return (react_1["default"].createElement("div", { className: "container mx-auto py-8 px-4" },
        react_1["default"].createElement("h1", { className: "text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100" }, "Your Cart"),
        cartItems.length === 0 ? (react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center mt-10" },
            react_1["default"].createElement("div", { className: "bg-gray-100 dark:bg-gray-700 p-6 rounded-full shadow-xl mb-4" },
                react_1["default"].createElement(outline_1.ShoppingCartIcon, { className: "w-24 h-24 text-gray-500 dark:text-gray-300" })),
            react_1["default"].createElement("p", { className: "text-center text-lg text-gray-600 dark:text-gray-400 mb-4" }, "Your cart is empty. Let's get you some goodies!"),
            react_1["default"].createElement("button", { onClick: function () { return alert('Taking you to the shop...'); }, className: "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" },
                react_1["default"].createElement(link_1["default"], { href: '/deals' }, "Start Shopping")))) : (react_1["default"].createElement("div", null,
            cartItems.map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" },
                react_1["default"].createElement("img", { src: item.image, alt: item.name, className: "w-24 h-24 rounded object-cover" }),
                react_1["default"].createElement("div", { className: "flex-1 ml-4" },
                    react_1["default"].createElement("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100" }, item.name),
                    react_1["default"].createElement("p", { className: "text-gray-600 dark:text-gray-400" },
                        "$",
                        item.price.toFixed(2))),
                react_1["default"].createElement("div", { className: "flex items-center mt-2 md:mt-0" },
                    react_1["default"].createElement("button", { onClick: function () { return updateQuantity(item.id, item.quantity - 1); }, className: "w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" },
                        react_1["default"].createElement(solid_1.MinusIcon, { className: "w-5 h-5" })),
                    react_1["default"].createElement("div", { className: "w-10 h-10 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-full flex items-center justify-center mx-2" }, item.quantity),
                    react_1["default"].createElement("button", { onClick: function () { return updateQuantity(item.id, item.quantity + 1); }, className: "w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" },
                        react_1["default"].createElement(solid_1.PlusIcon, { className: "w-5 h-5" })),
                    react_1["default"].createElement("button", { onClick: function () { return removeItem(item.id); }, className: "ml-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500" },
                        react_1["default"].createElement(solid_1.TrashIcon, { className: "w-6 h-6" }))))); }),
            react_1["default"].createElement("div", { className: "text-right mt-6" },
                react_1["default"].createElement("p", { className: "text-xl font-bold text-gray-900 dark:text-gray-100" },
                    "Total: $",
                    calculateTotal()),
                react_1["default"].createElement("button", { onClick: function () { return alert('Proceeding to checkout...'); }, className: "mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" },
                    react_1["default"].createElement(link_1["default"], { href: 'checkout' }, "Checkout")))))));
};
exports["default"] = CartPage;
