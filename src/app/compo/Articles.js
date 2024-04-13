
import Link from "next/link"

let Articles = async () => {
  return (
    <>
      <button className="messages-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x-circle"
        >
          <circle cx={12} cy={12} r={10} />
          <line x1={15} y1={9} x2={9} y2={15} />
          <line x1={9} y1={9} x2={15} y2={15} />
        </svg>
      </button>
      <div className="projects-section-header">
        <p>Top Articles</p>
      </div>
      <div className="messages">
        {articles.map((article,i) => (
          <div className="message-box" key={article.id || i}>
            <div className="message-content">
              <div className="message-header">
                <Link href={"/release/"+article.id}><div className="name cursor-pointer">{article.title}</div></Link>
                <div className="star-checkbox">
                  <input
                    type="checkbox"
                    id={`star-${article.id}`}
                    checked={article.starred}
                  />
                  <label htmlFor={`star-${article.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="message-line">{article.content}</p>
              <p className="message-line time">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const articles = [
  {
    id: 1,
    title: "How to Deploy an Express API to Vercel 🚀",
    content:
      "Hey there! So, you've got this snazzy Express API and you're thinking, Let's dive into it with some easy steps. 🎉",
    date: "Dec, 12",
    starred: false,
  },
  {
    id: 2,
    title: "10 Tips for Writing Clean Code in JavaScript",
    content:
      "Writing clean and maintainable code is crucial for any developer. Here are 10 tips to help you write cleaner JavaScript code.",
    date: "Dec, 14",
    starred: true,
  },
  {
    id: 3,
    title: "Getting Started with React Hooks",
    content:
      "React Hooks provide a simpler and more intuitive way to work with state and side effects in your React applications.",
    date: "Dec, 16",
    starred: false,
  },
  {
    id: 4,
    title: "Introduction to Node.js and Express",
    content:
      "Node.js and Express.js are popular technologies for building backend applications. Here's a beginner-friendly introduction.",
    date: "Dec, 18",
    starred: false,
  },
  {
    id: 5,
    title: "Responsive Web Design: Tips and Best Practices",
    content:
      "In a world where users access websites on various devices, responsive web design is crucial. Learn some tips and best practices.",
    date: "Dec, 20",
    starred: true,
  },
  {
    id: 6,
    title: "A Guide to CSS Flexbox",
    content:
      "Flexbox is a powerful layout system in CSS. This guide will walk you through its features and how to use them in your projects.",
    date: "Dec, 22",
    starred: false,
  },
  {
    id: 7,
    title: "Understanding Asynchronous JavaScript",
    content:
      "Asynchronous programming is fundamental to JavaScript. Learn how it works and how to write asynchronous code effectively.",
    date: "Dec, 24",
    starred: true,
  },
  {
    id: 8,
    title: "Using Git for Version Control: A Beginner's Guide",
    content:
      "Git is a powerful tool for version control. This beginner's guide will help you understand the basics and get started with Git.",
    date: "Dec, 26",
    starred: false,
  },
  {
    id: 9,
    title: "Diving into MongoDB: A Beginner's Guide",
    content:
      "MongoDB is a popular NoSQL database. This guide will introduce you to MongoDB and help you get started with database operations.",
    date: "Dec, 28",
    starred: false,
  },
  {
    id: 10,
    title: "Building RESTful APIs with Express and MongoDB",
    content:
      "Learn how to build RESTful APIs with Express.js and MongoDB. This tutorial will guide you through the process step by step.",
    date: "Dec, 30",
    starred: true,
  },
];

export default Articles;
