const Article = require("../models/Article");

const addArticle = async (req, res) => {
    try {
        const { title, photo, submissionDate, description, content, onFront } = req.body;

        if (!title || !photo || !submissionDate || !description || !content || onFront === undefined) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const article = await Article.create({
            title,
            photo,
            submissionDate,
            description,
            content,
            onFront,
        });

        res.status(201).json({ article });
    } catch (error) {
        console.error("Error adding article:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json({ articles });
    } catch (error) {
        console.error("Error getting articles:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

const deleteArticleById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedArticle = await Article.findByIdAndDelete(id);
        if (!deletedArticle) {
            return res.status(404).json({ error: "Article not found." });
        }
        res.json({ message: "Article deleted successfully." });
    } catch (error) {
        console.error("Error deleting article by ID:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

const updateArticleById = async (req, res) => {
    const id = req.params.id;
    const { title, photo, submissionDate, description, content, onFront } = req.body;
    
    if (!title || !photo || !submissionDate || !description || !content || onFront === undefined) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const updatedArticle = await Article.findByIdAndUpdate(id, {
            title,
            photo,
            submissionDate,
            description,
            content,
            onFront,
        }, { new: true });

        if (!updatedArticle) {
            return res.status(404).json({ error: "Article not found." });
        }

        res.json({ article: updatedArticle });
    } catch (error) {
        console.error("Error updating article by ID:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

module.exports = {
    addArticle,
    getAllArticles,
    deleteArticleById,
    updateArticleById,
};
