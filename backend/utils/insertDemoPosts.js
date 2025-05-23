const Blog = require('../models/Blog');

const insertDemoPosts = async () => {
    const existing = await Blog.find();
    if (existing.length === 0) {
        const demoPosts = [
            {
                title: "First Blog Post",
                caption: "My Travel to Himachal",
                description: "It was an amazing experience visiting the hills.",
                image: "/images/blog-grid-2.jpg",
                community: "Travel",
                comments: [],
                likes: 0,
                date: new Date().toLocaleDateString(),
            },
            {
                title: "Second Blog Post",
                caption: "Delicious Food in Delhi",
                description: "I tried street food in Chandni Chowk, it was amazing!",
                image: "/images/blog-grid-1.jpg",
                community: "Food",
                comments: [],
                likes: 0,
                date: new Date().toLocaleDateString(),
            }
        ];

        await Blog.insertMany(demoPosts);
        console.log("✅ Demo blog posts inserted");
    } else {
        console.log("ℹ️ Blog collection already has data");
    }
};

module.exports = insertDemoPosts;
