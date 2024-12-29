'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var link_1 = require("next/link");
var Navbar = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(false), scrolling = _b[0], setScrolling = _b[1];
    var _c = react_1.useState(false), isMenuOpen = _c[0], setIsMenuOpen = _c[1];
    var _d = react_1.useState(false), isDarkMode = _d[0], setIsDarkMode = _d[1];
    var toggleMenu = function () { return setIsOpen(!isOpen); };
    var toggleTheme = function () { return setIsDarkMode(!isDarkMode); };
    var handleScroll = function () {
        setScrolling(window.scrollY > 50);
    };
    react_1.useEffect(function () {
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    react_1.useEffect(function () {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "bg-[#0b0b0b] text-white py-2 text-center font-semibold text-lg" },
            react_1["default"].createElement("marquee", null, "\u2728 Special Offers! Check out our Deals and more! \u2728")),
        react_1["default"].createElement("nav", { className: "p-4 bg-background/55 backdrop-blur sticky top-0 border-b z-50" },
            react_1["default"].createElement("div", { className: "container mx-auto flex justify-between items-center mb-6" },
                react_1["default"].createElement("div", { className: "text-lg font-bold flex justify-center items-center" },
                    react_1["default"].createElement(link_1["default"], { href: "/" },
                        react_1["default"].createElement("span", { className: "text-2xl font-extrabold " + (isDarkMode ? 'text-white' : 'text-[#4D0011]') },
                            "Tabarak",
                            ' ',
                            react_1["default"].createElement("span", { className: "bg-gradient-to-r from-red-600 to-orange-400 text-transparent bg-clip-text" }, "Foods")))),
                react_1["default"].createElement("div", { className: "hidden md:flex space-x-8 flex-1 justify-center items-center" },
                    react_1["default"].createElement(link_1["default"], { href: "/", className: "text-lg font-medium transition-all duration-300 " + (isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]') + " hover:underline" }, "Home"),
                    react_1["default"].createElement(link_1["default"], { href: "/about", className: "text-lg font-medium transition-all duration-300 " + (isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]') + " hover:underline" }, "About"),
                    react_1["default"].createElement("div", { className: "relative" },
                        react_1["default"].createElement("button", { onClick: function () { return setIsMenuOpen(!isMenuOpen); }, className: "text-lg font-medium transition-all duration-300 " + (isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]') + " hover:underline" }, "Menu"),
                        isMenuOpen && (react_1["default"].createElement("div", { className: "absolute top-full left-0 mt-2 bg-[#1a1a1a] text-white p-4 shadow-lg rounded-lg space-y-4 w-48" },
                            react_1["default"].createElement(link_1["default"], { href: "/deals", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Shop All"),
                            react_1["default"].createElement(link_1["default"], { href: "/menu", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Our Menu"),
                            react_1["default"].createElement(link_1["default"], { href: "/special", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Our Special")))),
                    react_1["default"].createElement(link_1["default"], { href: "/contact", className: "text-lg font-medium transition-all duration-300 " + (isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]') + " hover:underline" }, "Contact")),
                react_1["default"].createElement("div", { className: "flex space-x-6 items-center" },
                    react_1["default"].createElement("button", { onClick: toggleTheme, className: "transition-all duration-300 " + (isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]') + " hover:text-[#F5DEB3]" }, isDarkMode ? react_1["default"].createElement(fa_1.FaSun, { size: 24 }) : react_1["default"].createElement(fa_1.FaMoon, { size: 24 })),
                    react_1["default"].createElement(link_1["default"], { href: "/cart" },
                        react_1["default"].createElement(fa_1.FaShoppingCart, { size: 24, className: "transition-all duration-300 " + (isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]') + " hover:text-[#F5DEB3]" })),
                    react_1["default"].createElement(link_1["default"], { href: "/register" },
                        react_1["default"].createElement(fa_1.FaUserPlus, { size: 24, className: "transition-all duration-300 " + (isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]') + " hover:text-[#F5DEB3]" }))),
                react_1["default"].createElement("button", { onClick: toggleMenu, className: "md:hidden transition-all duration-300 " + (isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]') + " hover:text-[#F5DEB3]" }, isOpen ? react_1["default"].createElement(fa_1.FaTimes, { size: 24 }) : react_1["default"].createElement(fa_1.FaBars, { size: 24 }))),
            isOpen && (react_1["default"].createElement("div", { className: "md:hidden " + (isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#4D0011] text-white') + " p-4 space-y-4" },
                react_1["default"].createElement(link_1["default"], { href: "/", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsOpen(false); } }, "Home"),
                react_1["default"].createElement(link_1["default"], { href: "/about", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsOpen(false); } }, "About"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("button", { onClick: function () { return setIsMenuOpen(!isMenuOpen); }, className: "block " + (isDarkMode ? 'text-white' : 'text-[#4D0011]') + " hover:text-[#F5DEB3] hover:underline" }, "Menu"),
                    isMenuOpen && (react_1["default"].createElement("div", { className: "space-y-2 p-4 " + (isDarkMode ? 'bg-gray-800 text-white' : 'bg-black text-white') },
                        react_1["default"].createElement(link_1["default"], { href: "/deals", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Shop All"),
                        react_1["default"].createElement(link_1["default"], { href: "/menu", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Our Menu"),
                        react_1["default"].createElement(link_1["default"], { href: "/special", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsMenuOpen(false); } }, "Special")))),
                react_1["default"].createElement(link_1["default"], { href: "/contact", className: "block hover:text-[#F5DEB3] transition-all duration-300 hover:underline", onClick: function () { return setIsOpen(false); } }, "Contact"))))));
};
exports["default"] = Navbar;
