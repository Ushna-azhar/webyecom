'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
function Home() {
    // State for theme
    var _a = react_1.useState("light"), theme = _a[0], setTheme = _a[1];
    // Persist theme in localStorage and apply to root element
    react_1.useEffect(function () {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
        else {
            localStorage.setItem("theme", "light");
        }
    }, []);
    react_1.useEffect(function () {
        // Apply the theme to the root element
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme); // Save theme in localStorage
    }, [theme]);
    var products = [
        { image: "nihari.webp", name: "Nihari", description: "Delicious beef stew" },
        { image: "biryani.jpg", name: "Biryani", description: "Flavorful rice dish" },
        { image: "karahi.jpg", name: "Karahi", description: "Spicy chicken curry" },
    ];
    var testimonials = [
        { name: "John Doe", text: "Amazing quality! Will definitely shop again." },
        { name: "Jane Smith", text: "Fantastic experience. Highly recommend!" },
        { name: "Sara Lee", text: "Best shopping experience I've ever had!" },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "relative w-full h-screen" },
            react_1["default"].createElement("video", { autoPlay: true, loop: true, muted: true, className: "object-cover w-full h-full absolute top-0 left-0" },
                react_1["default"].createElement("source", { src: "/headerr.mp4", type: "video/mp4" }),
                "Your browser does not support the video tag."),
            react_1["default"].createElement("div", { className: "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" },
                react_1["default"].createElement("div", { className: "text-center text-white px-4 md:px-8" },
                    react_1["default"].createElement("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 relative inline-block" },
                        react_1["default"].createElement("span", { className: "bg-gradient-to-r from-red-800 to-yellow-600 text-transparent bg-clip-text" }, "TABARAK"),
                        react_1["default"].createElement("span", { className: "relative z-10 pl-2" },
                            react_1["default"].createElement("span", { className: "bg-gradient-to-r from-transparent via-white to-transparent text-transparent bg-clip-text" }, "FOODS"))),
                    react_1["default"].createElement("p", { className: "text-lg sm:text-xl mb-8" }, "Discover your next favorite product today!"),
                    react_1["default"].createElement(link_1["default"], { href: "/deals" },
                        react_1["default"].createElement("div", { className: "bg-[#4D0011] hover:bg-red-700 text-white text-lg py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg" }, "Shop Now"))))),
        react_1["default"].createElement("section", { className: "py-12 bg-gray-50 dark:bg-gray-800" },
            react_1["default"].createElement("h2", { className: "text-3xl font-semibold text-center mb-8" }, "Featured Products"),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8" }, products.map(function (product, index) { return (react_1["default"].createElement("div", { key: index, className: "group border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105" },
                react_1["default"].createElement("img", { src: "/" + product.image, alt: product.name, className: "w-full h-64 object-cover mb-4 rounded-md group-hover:scale-105 transition-transform duration-300" }),
                react_1["default"].createElement("h3", { className: "text-xl font-bold" }, product.name),
                react_1["default"].createElement("p", { className: "text-gray-500" }, product.description),
                react_1["default"].createElement(link_1["default"], { href: "/product" },
                    react_1["default"].createElement("div", { className: "text-blue-500 hover:underline mt-4 inline-block" }, "View Product")))); })))));
}
exports["default"] = Home;
