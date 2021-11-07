"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const normalizeOrder_1 = require("../middlewares/normalizeOrder");
const router = (0, express_1.Router)();
router.get('/', order_1.getOrdersByEcommerce);
router.get('/:id', order_1.getOrderById);
router.get('/customer/:id', order_1.getOrdersByCustomer);
router.post('/', [normalizeOrder_1.normalizeOrder], order_1.postOrder);
router.put('/:id', order_1.putOrder);
router.delete('/:id', order_1.deleteOrder);
exports.default = router;
