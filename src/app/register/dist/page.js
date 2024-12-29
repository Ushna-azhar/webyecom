'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RegisterPage = function () {
    var _a = react_1.useState(''), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(''), phone = _d[0], setPhone = _d[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Email:', email);
        console.log('Phone:', phone);
    };
    return (react_1["default"].createElement("div", { style: {
            background: 'linear-gradient(to bottom right, #4D0011, #FF5E5B)',
            color: '#F5F5DC',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        } },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, style: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#4D0011',
                borderRadius: '20px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                padding: '40px 30px',
                width: '100%',
                maxWidth: '500px',
                fontFamily: "'Poppins', sans-serif",
                animation: 'fadeIn 0.8s ease-out'
            } },
            react_1["default"].createElement("h1", { style: {
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    color: '#4D0011',
                    textTransform: 'uppercase'
                } }, "Join Us"),
            react_1["default"].createElement("input", { type: "text", placeholder: "Username", value: username, onChange: function (e) { return setUsername(e.target.value); }, style: {
                    marginBottom: '15px',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease-in-out'
                }, onFocus: function (e) { return e.target.style.borderColor = '#FF5E5B'; }, onBlur: function (e) { return e.target.style.borderColor = '#ccc'; } }),
            react_1["default"].createElement("input", { type: "email", placeholder: "Email", value: email, onChange: function (e) { return setEmail(e.target.value); }, style: {
                    marginBottom: '15px',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease-in-out'
                }, onFocus: function (e) { return e.target.style.borderColor = '#FF5E5B'; }, onBlur: function (e) { return e.target.style.borderColor = '#ccc'; } }),
            react_1["default"].createElement("input", { type: "tel", placeholder: "Phone Number", value: phone, onChange: function (e) { return setPhone(e.target.value); }, style: {
                    marginBottom: '15px',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease-in-out'
                }, onFocus: function (e) { return e.target.style.borderColor = '#FF5E5B'; }, onBlur: function (e) { return e.target.style.borderColor = '#ccc'; } }),
            react_1["default"].createElement("input", { type: "password", placeholder: "Password", value: password, onChange: function (e) { return setPassword(e.target.value); }, style: {
                    marginBottom: '20px',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease-in-out'
                }, onFocus: function (e) { return e.target.style.borderColor = '#FF5E5B'; }, onBlur: function (e) { return e.target.style.borderColor = '#ccc'; } }),
            react_1["default"].createElement("button", { type: "submit", style: {
                    padding: '15px',
                    borderRadius: '10px',
                    backgroundColor: '#4D0011',
                    color: '#F5F5DC',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
                }, onMouseOver: function (e) { return (e.target.style.backgroundColor = '#FF5E5B'); }, onMouseOut: function (e) { return (e.target.style.backgroundColor = '#4D0011'); }, onMouseDown: function (e) { return e.target.style.transform = 'scale(0.98)'; }, onMouseUp: function (e) { return e.target.style.transform = 'scale(1)'; } }, "Register"))));
};
exports["default"] = RegisterPage;
