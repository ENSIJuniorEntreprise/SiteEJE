const express = require("express")
const articleController = require("../controllers/articleController")

const router = express.Router();

router.post('/', articleController.addArticle);
router.get('/', articleController.getAllArticles);
router.put('/:id', articleController.updateArticleById);
router.delete('/:id', articleController.deleteArticleById);

module.exports = router;