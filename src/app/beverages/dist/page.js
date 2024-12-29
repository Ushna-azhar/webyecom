'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var products = {
    beverages: [
        { id: 1, name: 'Cola Next', description: 'Refreshing Drink.', image: '/cd1.jpg' },
        { id: 2, name: 'Tea', description: 'Refreshing herbal tea.', image: 'tea1.jpeg' },
        { id: 3, name: 'Fizzup', description: 'Sparkling fizzy drink.', image: 'cdd.jpeg' },
    ],
    others: [
        { id: 4, name: 'Tandoor', description: 'Tandoor bread.', image: 'naan.jpg' },
        { id: 5, name: 'Chapati', description: 'Traditional flatbread.', image: 'roti.jpg' },
        { id: 6, name: 'Kulcha', description: 'Soft and delicious bread.', image: 'kul.jpg' },
    ]
};
var ProductCard = function (_a) {
    var product = _a.product;
    var _b = react_1.useState(1), quantity = _b[0], setQuantity = _b[1];
    var handleAddToCart = function () {
        // Logic to add the product to the cart
        console.log("Added " + quantity + " of " + product.name + " to cart.");
    };
    return (react_1["default"].createElement("div", { className: "border rounded-lg shadow-md p-4 w-full max-w-xs bg-white dark:bg-gray-800 dark:text-white transition-transform transform hover:scale-105" },
        react_1["default"].createElement("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover rounded-md mb-4" }),
        react_1["default"].createElement("h3", { className: "text-lg font-bold mb-2 text-center" }, product.name),
        react_1["default"].createElement("p", { className: "text-gray-600 dark:text-gray-300 mb-2 text-center" }, product.description),
        react_1["default"].createElement("div", { className: "flex items-center justify-between mt-4" },
            react_1["default"].createElement("input", { type: "number", value: quantity, onChange: function (e) { return setQuantity(e.target.value); }, min: "1", className: "border rounded-md w-16 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600" }),
            react_1["default"].createElement("button", { onClick: handleAddToCart, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300" }, "Add to Cart"))));
};
var Page = function () {
    return (react_1["default"].createElement("div", { className: "p-6 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen" },
        react_1["default"].createElement("section", { className: "mb-8" },
            react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-4 dark:text-white text-center" }, "Beverages"),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                react_1["default"].createElement("div", { className: "col-span-3 md:col-span-1" },
                    react_1["default"].createElement(ProductCard, { product: products.beverages[0] })),
                products.beverages.slice(1).map(function (product) { return (react_1["default"].createElement("div", { key: product.id },
                    react_1["default"].createElement(ProductCard, { product: product }))); }))),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement("h2", { className: "text-3xl font-bold mb-4 dark:text-white text-center" }, "Others"),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, products.others.map(function (product) { return (react_1["default"].createElement("div", { key: product.id },
                react_1["default"].createElement(ProductCard, { product: product }))); })))));
};
exports["default"] = Page;
