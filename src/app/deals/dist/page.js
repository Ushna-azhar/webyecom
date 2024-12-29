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
var link_1 = require("next/link");
var products = [
    { id: 1, name: 'Nihari', price: 10.99, image: '/p1.jpeg', description: 'Delicious Nihari' },
    { id: 2, name: 'Biryani', price: 8.99, image: '/p2.jpg', description: 'Delicious Biryani' },
    { id: 3, name: 'Qorma', price: 12.99, image: '/p3.webp', description: 'Badami Qorma' },
    { id: 4, name: 'Karahi', price: 7.99, image: '/p4.jpg', description: 'Shahi Karahi' },
    { id: 5, name: 'Haleem', price: 14.99, image: '/p5.webp', description: 'Deghi Haleem' },
    { id: 6, name: 'Chicken Pulao', price: 9.99, image: '/p6.jpg', description: 'Delicious Pulao' },
    { id: 7, name: 'Desi Kheer Special', price: 19.99, image: '/p7.jpg', description: 'Kheer' },
    { id: 8, name: 'Desi Zarda Special', price: 4.99, image: '/p8.jpg', description: 'Overloaded Zarda' },
    // New products added below:
    { id: 9, name: 'Qorma', price: 15.99, image: '/qorma.jpg', description: 'Rich and flavorful Qorma' },
    { id: 10, name: 'Naan', price: 3.99, image: '/naan.jpg', description: 'Soft and fluffy Naan' },
    { id: 11, name: 'Kulcha', price: 4.99, image: '/kul.jpg', description: 'Delicious and warm Kulcha' },
    { id: 12, name: 'Chapati', price: 2.99, image: '/roti.jpg', description: 'Freshly made Chapati' },
    { id: 13, name: 'Cold Drink', price: 1.99, image: '/cd1.jpg', description: 'Chilled and refreshing Cold Drink' },
    { id: 14, name: 'Tea', price: 2.49, image: '/tea1.jpeg', description: 'Refreshing Cold Tea' },
    { id: 15, name: 'Water', price: 0.99, image: '/water.webp', description: 'Pure and fresh Water' },
];
var DealsPage = function () {
    var _a = react_1.useState([]), cart = _a[0], setCart = _a[1]; // State to hold cart items
    var addToCart = function (product) {
        setCart(function (prevCart) {
            var existingItem = prevCart.find(function (item) { return item.id === product.id; });
            if (existingItem) {
                return prevCart.map(function (item) {
                    return item.id === product.id
                        ? __assign(__assign({}, item), { quantity: item.quantity + 1 }) : item;
                });
            }
            else {
                return __spreadArrays(prevCart, [__assign(__assign({}, product), { quantity: 1 })]);
            }
        });
    };
    // Calculate the total price of the cart
    var calculateTotal = function () {
        var total = cart.reduce(function (total, item) {
            var price = parseFloat(item.price); // Ensure price is a valid number
            var quantity = item.quantity ? parseInt(item.quantity, 10) : 0; // Ensure quantity is a valid number
            if (isNaN(price) || isNaN(quantity)) {
                return total; // Skip invalid items by returning the previous total
            }
            return total + price * quantity;
        }, 0);
        return total.toFixed(2); // Return the formatted total
    };
    return (react_1["default"].createElement("div", { className: "container mx-auto py-12 px-4" },
        react_1["default"].createElement("h1", { className: "text-5xl font-bold text-center mb-6 text-[#4D0011] dark:text-gray-100 tracking-tight leading-snug relative" },
            react_1["default"].createElement("span", { className: "inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2 animate-bounce transition-transform duration-300 ease-in-out" }, "Shop All")),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" }, products.map(function (product) { return (react_1["default"].createElement("div", { key: product.id, className: "bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl" },
            react_1["default"].createElement(link_1["default"], { href: "/product/" + product.id },
                react_1["default"].createElement("img", { src: product.image, alt: product.name, className: "w-full h-56 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110" }),
                react_1["default"].createElement("div", { className: "p-6" },
                    react_1["default"].createElement("h2", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2" }, product.name),
                    react_1["default"].createElement("p", { className: "text-lg font-medium text-gray-600 dark:text-gray-400 mb-4" }, product.description),
                    react_1["default"].createElement("p", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100" },
                        "$",
                        product.price.toFixed(2)),
                    react_1["default"].createElement("button", { onClick: function () { return addToCart(product); }, className: "mt-4 bg-[#4D0011] text-white py-2 px-6 rounded-lg hover:bg-red-400 transition duration-300" }, "Order Now!"))))); })),
        cart.length > 0 && (react_1["default"].createElement("div", { className: "mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" },
            react_1["default"].createElement("h2", { className: "text-2xl font-semibold text-gray-900 dark:text-gray-100" }, "Your Cart"),
            react_1["default"].createElement("div", { className: "mt-4" }, cart.map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "flex items-center justify-between py-4 border-b" },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("img", { src: item.image, alt: item.name, className: "w-16 h-16 rounded-md object-cover" }),
                    react_1["default"].createElement("div", { className: "ml-4" },
                        react_1["default"].createElement("h3", { className: "text-lg font-semibold text-gray-800 dark:text-gray-100" }, item.name),
                        react_1["default"].createElement("p", { className: "text-gray-600 dark:text-gray-400" },
                            "$",
                            item.price.toFixed(2)))),
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("span", { className: "text-gray-800 dark:text-gray-100" },
                        "Qty: ",
                        item.quantity)))); })),
            react_1["default"].createElement("div", { className: "mt-6 flex justify-between items-center" },
                react_1["default"].createElement("p", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100" },
                    "Total: $",
                    calculateTotal()),
                react_1["default"].createElement("button", { onClick: function () { return alert('Proceeding to checkout...'); }, className: "mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition" }, "Checkout"))))));
};
exports["default"] = DealsPage;
