"use strict";
exports.__esModule = true;
// pages/beverages/index.tsx
var link_1 = require("next/link");
var ProductCard_1 = require("@/components/ProductCard");
var beverages = [
    { id: 1, name: 'Coke', description: 'A refreshing soda', price: '$1.99' },
    { id: 2, name: 'Pepsi', description: 'A popular soda', price: '$1.89' },
];
function BeveragesPage() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Beverages"),
        React.createElement("div", { className: "product-list" }, beverages.map(function (product) { return (React.createElement(link_1["default"], { key: product.id, href: "/beverages/" + product.id },
            React.createElement(ProductCard_1["default"], { product: product }))); }))));
}
exports["default"] = BeveragesPage;
