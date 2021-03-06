"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ecommerce_1 = require("../controllers/ecommerce");
const router = (0, express_1.Router)();
router.get('/:id', ecommerce_1.getEcommerce);
router.post('/', ecommerce_1.postEcommerce);
// router.put('/:id', putEcommerce);
// router.delete('/:id', deleteEcommerce);
exports.default = router;
