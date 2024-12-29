"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Page() {
    return (react_1["default"].createElement("div", { className: "container mx-auto py-12 px-4" },
        react_1["default"].createElement("h1", { className: "text-5xl font-extrabold text-center mb-12 text-[#4D0011] dark:text-gray-100 tracking-wide relative" },
            react_1["default"].createElement("span", { className: "inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2" }, "Menu")),
        react_1["default"].createElement("div", { className: "flex justify-center" },
            react_1["default"].createElement("img", { src: "/menu-card.jpg" // Path to the menu card in the public folder
                , className: "w-full sm:w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-lg shadow-lg", title: "Menu Card" }))));
}
exports["default"] = Page;
