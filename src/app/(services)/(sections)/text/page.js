'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from '@/app/compo/Card';
import CardLoading from '@/app/compo/loading/Card';
import TextCard1 from './compo/TextCard1';


export default function TextFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const fetchPosts = async () => {
        if (!loading && hasMore) {
            setLoading(true);
            try {
                const response = await fetch(`/api/feed?type=text&page=${page}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                if (data.data.data.length === 0) {
                    setHasMore(false);
                } else {
                    setPosts((prevPosts) => [...prevPosts, ...data.data.data]);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const lastPostRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                setPage(prevPage => prevPage + 1);
            }
        }, { rootMargin: '0px 0px 1000px 0px' }); // Adjust rootMargin as needed
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    return (
        <div className="flex flex-wrap justify-center overflow-auto">
            {posts.map((post, index) => {
                const isLastPost = posts.length === index + 1;
                return (
                    <div key={index} className="w-full md:w-[40%] m-2" ref={isLastPost ? lastPostRef : null}>
                        <TextCard1 post={post} />
                    </div>
                );
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
