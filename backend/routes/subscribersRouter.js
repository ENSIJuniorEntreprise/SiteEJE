const express = require("express")
const subscriberController = require("../controllers/subscriberController")

const router = express.Router();

router.post('/', subscriberController.addSubscriber);
router.delete('/:id', subscriberController.deleteSubscriberById);

module.exports = router;