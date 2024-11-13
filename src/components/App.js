import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
    // Data for the blog
    const blogTitle = "My Blog";
    const aboutImage = "https://example.com/image.png";  // You can leave this undefined to test the default image
    const aboutText = "This blog covers tech, programming, and latest trends in software development.";
    
    // Sample articles data
    const articles = [
        {
            id: 1,
            title: "Understanding JavaScript Closures",
            date: "October 10, 2023",
            preview: "A guide to understanding closures in JavaScript, with examples.",
            minutesToRead: 8,
        },
        {
            id: 2,
            title: "React Hooks in Depth",
            preview: "Learn the fundamentals of React hooks, how they work, and why they’re important.",
            minutesToRead: 12,
        },
        {
            id: 3,
            title: "Async/Await Simplified",
            preview: "A look at asynchronous programming in JavaScript with async/await.",
            minutesToRead: 45,
        },
    ];

    return (
        <div>
            <Header title={blogTitle} />
            <About imageSrc={aboutImage} aboutText={aboutText} />
            <ArticleList articles={articles} />
        </div>
    );
}

export default App;
