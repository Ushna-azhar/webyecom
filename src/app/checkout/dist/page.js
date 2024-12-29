'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var CheckoutPage = function () {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), phone = _c[0], setPhone = _c[1];
    var _d = react_1.useState(''), address = _d[0], setAddress = _d[1];
    var _e = react_1.useState(''), city = _e[0], setCity = _e[1];
    var _f = react_1.useState(''), zipCode = _f[0], setZipCode = _f[1];
    var _g = react_1.useState(''), cardNumber = _g[0], setCardNumber = _g[1];
    var _h = react_1.useState(''), expiration = _h[0], setExpiration = _h[1];
    var _j = react_1.useState(''), cvv = _j[0], setCvv = _j[1];
    var _k = react_1.useState([]), orderSummary = _k[0], setOrderSummary = _k[1];
    var _l = react_1.useState(false), loading = _l[0], setLoading = _l[1];
    var _m = react_1.useState(''), error = _m[0], setError = _m[1];
    // Load cart items from localStorage on page load
    react_1.useEffect(function () {
        var savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                var parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setOrderSummary(parsedCart);
                }
                else {
                    console.error('Invalid cart format in localStorage');
                }
            }
            catch (error) {
                console.error('Error parsing cart data from localStorage', error);
            }
        }
    }, []);
    // Calculate the total amount based on the order summary
    var totalAmount = orderSummary.reduce(function (total, item) { return total + item.quantity * item.price; }, 0);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var orderData, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setError('');
                    orderData = {
                        name: name,
                        email: email,
                        phone: phone,
                        address: address,
                        city: city,
                        zipCode: zipCode,
                        cardNumber: cardNumber,
                        expiration: expiration,
                        cvv: cvv,
                        orderSummary: orderSummary,
                        totalAmount: totalAmount
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch('/api/checkout', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(orderData)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (response.ok) {
                        // Handle successful order (e.g., redirect to a confirmation page)
                        console.log('Order confirmed:', data);
                        // Optionally, redirect to a confirmation page
                    }
                    else {
                        throw new Error(data.message || 'Something went wrong');
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    setError(error_1.message);
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "bg-gradient-to-br from-gray-800 to-gray-400 text-beige-100 h-screen flex justify-center items-center p-4" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "bg-white bg-opacity-90 text-black rounded-lg shadow-lg p-4 w-full max-w-xs font-sans" },
            react_1["default"].createElement("h1", { className: "text-center mb-3 text-lg font-bold tracking-wide text-black uppercase" }, "Checkout"),
            react_1["default"].createElement("h2", { className: "text-sm mb-2 text-black" }, "Personal Information"),
            react_1["default"].createElement("input", { type: "text", placeholder: "Full Name", value: name, onChange: function (e) { return setName(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "email", placeholder: "Email Address", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "tel", placeholder: "Phone Number", value: phone, onChange: function (e) { return setPhone(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("h2", { className: "text-sm mb-2 text-black" }, "Shipping Address"),
            react_1["default"].createElement("input", { type: "text", placeholder: "Address", value: address, onChange: function (e) { return setAddress(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "City", value: city, onChange: function (e) { return setCity(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "Zip Code", value: zipCode, onChange: function (e) { return setZipCode(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("h2", { className: "text-sm mb-2 text-black" }, "Payment Information"),
            react_1["default"].createElement("input", { type: "text", placeholder: "Credit Card Number", value: cardNumber, onChange: function (e) { return setCardNumber(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "Expiration Date (MM/YY)", value: expiration, onChange: function (e) { return setExpiration(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "CVV", value: cvv, onChange: function (e) { return setCvv(e.target.value); }, className: "mb-2 p-2 border rounded-lg text-sm w-full border-gray-300" }),
            react_1["default"].createElement("h2", { className: "text-sm mb-2 text-black" }, "Order Summary"),
            react_1["default"].createElement("ul", { className: "mb-4 pl-4 text-xs" }, orderSummary.length > 0 ? (orderSummary.map(function (item, index) { return (react_1["default"].createElement("li", { key: index, className: "mb-1" },
                item.quantity,
                " x ",
                item.name,
                " @ $",
                item.price.toFixed(2),
                " each")); })) : (react_1["default"].createElement("p", null, "No items in cart."))),
            react_1["default"].createElement("p", { className: "text-xs font-bold" },
                "Total: $",
                totalAmount.toFixed(2)),
            react_1["default"].createElement("button", { type: "submit", className: "p-2 rounded-lg bg-black text-beige-100 text-xs font-bold w-full mt-4 transition-colors hover:bg-gray-700" }, loading ? 'Processing...' : 'Complete Order'),
            error && react_1["default"].createElement("p", { className: "text-red-500 mt-4 text-xs" }, error))));
};
exports["default"] = CheckoutPage;
