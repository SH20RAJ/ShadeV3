'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';  // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css'


function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);  // Add a loading state

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true); // Start loading
      try {
        const res = await fetch("/api/feed?type=article&limit=10");
        const articlesData = await res.json();
        setArticles(articlesData.data.data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
      setLoading(false); // End loading
    }

    fetchArticles();
  }, []);

  // Skeleton layout
  const renderSkeleton = () => (
    <div className="message-box">
      <div className="message-content">
        <Skeleton width="70%" height={20} />
        <Skeleton width="90%" height={15} style={{ marginTop: '10px' }} />
        <Skeleton width="50%" height={15} style={{ marginTop: '5px' }} />
      </div>
    </div>
  );

  return (
    <>
      <button className="messages-close">
        {/* Existing SVG code here */}
      </button>
      <div className="projects-section-header">
        <p>Top Articles</p>
      </div>
      <div className="messages">
        {loading ? (
          Array.from({ length: 15 }).map((_, index) => renderSkeleton())
        ) : (
          articles.map((article, i) => (
            <div className="message-box" key={article.id || i}>
              <div className="message-content">
                <div className="message-header">
                  <Link href={`/release/${article.id}`}>
                    <div className="name cursor-pointer">{article.title || "Title Not Given"}</div>
                  </Link>
                  <div className="star-checkbox">
                    {/* Checkbox and label code here */}
                  </div>
                </div>
                <p className="message-line">{article.content.substr(0, 100)}</p>
                <p className="message-line time">{article.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Articles;
