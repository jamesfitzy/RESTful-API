const db = require("express");
const router = db.Router();
const { Phone, PhoneSchema } = require("./models/phone");

//adding CRUD functionality for phone
router.post("/", async (req, res) => {
    const phone = new Phone(req.body);
    await phone.save();
    res.send(phone);
});

router.get("/", async (req, res) => {
    const phones = await Phone.find();
    res.send(phones);
});

router.get("/:id", async (req, res) => {
    const phone = await Phone.findById(req.params.id);
    res.send(phone);
});

router.put("/:id", async (req, res) => {
    const phone = await Phone.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send(phone);
});

router.delete("/:id", async (req, res) => {
    const phone = await Phone.findByIdAndDelete(req.params.id);
    res.send(phone);
});
//Export access to the queries that were made
module.exports = router;
