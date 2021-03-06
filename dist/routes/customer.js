"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_1 = require("../controllers/customer");
const router = (0, express_1.Router)();
router.get('/', customer_1.getCustomers);
router.get('/:id', customer_1.getCustomer);
router.post('/', customer_1.postCustomer);
router.put('/:id', customer_1.putCustomer);
router.delete('/:id', customer_1.deleteCustomer);
exports.default = router;
