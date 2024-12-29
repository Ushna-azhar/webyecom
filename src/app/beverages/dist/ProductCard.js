'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link"); // Import Link from next/link
var react_1 = require("react");
var ProductCard = function (_a) {
    var product = _a.product;
    var _b = react_1.useState(1), quantity = _b[0], setQuantity = _b[1];
    var handleAddToCart = function () {
        console.log("Added " + quantity + " of " + product.name + " to cart.");
    };
    return (react_1["default"].createElement(link_1["default"], { href: "/beverages/" + product.id },
        "  ",
        react_1["default"].createElement("div", { className: "border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:text-white transition-transform transform hover:scale-105 flex flex-col justify-between h-full" },
            react_1["default"].createElement("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover rounded-md mb-4" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", { className: "text-lg font-bold mb-2 text-center" }, product.name),
                react_1["default"].createElement("p", { className: "text-gray-600 dark:text-gray-300 mb-2 text-center" }, product.description)),
            react_1["default"].createElement("div", { className: "flex items-center justify-between mt-4" },
                react_1["default"].createElement("input", { type: "number", value: quantity, onChange: function (e) { return setQuantity(Number(e.target.value)); }, min: "1", className: "border rounded-md w-16 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600" }),
                react_1["default"].createElement("button", { onClick: handleAddToCart, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300" }, "Add to Cart")))));
};
exports["default"] = ProductCard;
