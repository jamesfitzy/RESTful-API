const db = require("express");
const router = db.Router();
const { Order, OrderSchema } = require("./models/order");

//adding CRUD functionality for orders
router.post("/", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
});

router.get("/", async (req, res) => {
    const orders = await Order.find().populate("customerId items");
    res.send(orders);
});

router.get("/:id", async (req, res) => {
    const order = await Order.findById(req.params.id).populate("customerId items");
    res.send(order);
});

router.put("/:id", async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }).populate("customerId items");
    res.send(order);
});

router.delete("/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});
//Export access to the queries that were made

module.exports = router;
