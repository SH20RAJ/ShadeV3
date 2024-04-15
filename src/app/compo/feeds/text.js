'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from '../../compo/Card';
import CardLoading from '../loading/Card';

export default function TextFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Track the current page
    const [hasMore, setHasMore] = useState(true); // Whether there are more posts to fetch
    const observer = useRef();

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/feed?type=text&page=${page}`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            // Check if there are more posts
            if (data.data.data.length === 0) {
                setHasMore(false);
                return;
            }
            setPosts((prevPosts) => [...prevPosts, ...data.data.data]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (hasMore) {
            fetchPosts();
        }

        // Clean up the observer on unmount
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [page, hasMore]);

    const lastPostRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [loading, hasMore]
    );

    useEffect(() => {
        // Fetch initial data only on mount
        fetchPosts();
    }, []); // Empty dependency array

    return (
        <div className="flex flex-wrap justify-center">
            {posts.map((post, index) => {
                if (posts.length === index + 1) {
                    return (
                        <div key={post.id || index} className="w-full md:w-[40%] m-2" ref={lastPostRef}>
                            <Card post={post} />
                        </div>
                    );
                } else {
                    return (
                        <div key={post.id || index} className="w-full md:w-[40%] m-2">
                            <Card post={post} />
                        </div>
                    );
                }
            })}
            {loading && (
                <div className="flex w-full gap-10 flex-wrap justify-center">
                    {[...Array(12)].map((_, i) => (
                        <CardLoading key={i} />
                    ))}
                </div>
            )}
            {!loading && !hasMore && (
                <div className="w-full text-center text-gray-500 mt-4">No more posts to load.</div>
            )}
        </div>
    );
}
