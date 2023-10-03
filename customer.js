const db = require("express");
const router = db.Router();
const { Customer, CustomerSchema } = require("./models/customer");


//adding CRUD functionality for customers

router.post("/", async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.send(customer);
});

router.get("/", async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
});

router.get("/:id", async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.send(customer);
});

router.put("/:id", async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send(customer);
});

router.delete("/:id", async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.send(customer);
});
//Export access to the queries that were made

module.exports = router;
