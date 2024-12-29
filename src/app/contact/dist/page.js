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
exports.__esModule = true;
var react_1 = require("react");
var Page = function () {
    var _a = react_1.useState({
        name: '',
        email: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        alert('Thank you for contacting us!');
        // You can handle form submission here (e.g., send data to a backend).
    };
    return (react_1["default"].createElement("div", { className: "container mx-auto py-12 px-6" },
        react_1["default"].createElement("h1", { className: "text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100" }, "Contact Us"),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12" },
            react_1["default"].createElement("div", { className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg" },
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100" }, "Get In Touch"),
                react_1["default"].createElement("form", { onSubmit: handleSubmit },
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { htmlFor: "name", className: "block text-gray-700 dark:text-gray-300 font-medium mb-2" }, "Name"),
                        react_1["default"].createElement("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900", required: true })),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { htmlFor: "email", className: "block text-gray-700 dark:text-gray-300 font-medium mb-2" }, "Email"),
                        react_1["default"].createElement("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900", required: true })),
                    react_1["default"].createElement("div", { className: "mb-4" },
                        react_1["default"].createElement("label", { htmlFor: "message", className: "block text-gray-700 dark:text-gray-300 font-medium mb-2" }, "Message"),
                        react_1["default"].createElement("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, rows: 4, className: "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900", required: true })),
                    react_1["default"].createElement("button", { type: "submit", className: "w-full bg-red-900 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300" }, "Send Message"))),
            react_1["default"].createElement("div", { className: "bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg" },
                react_1["default"].createElement("h2", { className: "text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100" }, "Our Contact Information"),
                react_1["default"].createElement("div", { className: "space-y-6" },
                    react_1["default"].createElement("div", { className: "flex items-center text-gray-700 dark:text-gray-300" },
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 mr-4 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.28 6.58a8.488 8.488 0 011.42-1.42m0 0L12 2l8.29 8.29m-8.29-8.29l8.29 8.29m-8.29 0l-8.29 8.29m0 0l1.42-1.42m0 0a8.488 8.488 0 011.42 1.42" })),
                        react_1["default"].createElement("p", { className: "text-lg" }, "1234 Restaurant St, Food City, FC 12345")),
                    react_1["default"].createElement("div", { className: "flex items-center text-gray-700 dark:text-gray-300" },
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 mr-4 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 3v2m0 0l2-2-2-2-2 2 2 2zm0 14v2m0 0l-2 2 2 2 2-2-2-2zm0-4v2m0 0l2-2-2-2-2 2 2 2z" })),
                        react_1["default"].createElement("p", { className: "text-lg" }, "+1 (123) 456-7890")),
                    react_1["default"].createElement("div", { className: "flex items-center text-gray-700 dark:text-gray-300" },
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 mr-4 text-red-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 4v2h4V4h-4zM4 4h4V2H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V8h-4V6h-4V4H4zm0 16V8h16v12H4z" })),
                        react_1["default"].createElement("p", { className: "text-lg" }, "azhar.danone@gmail.com")))))));
};
exports["default"] = Page;
