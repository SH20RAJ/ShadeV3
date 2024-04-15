'use client'
import React, { useState, useEffect } from 'react';
import Card from '../../compo/Card';
import CardLoading from '../loading/Card';

export default function TextFeed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/feed?type=text");
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="flex flex-wrap justify-center">
            {loading ? (
                <>
                <div className='flex w-full gap-10 flex-wrap justify-center'>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                <CardLoading/>                 <CardLoading/>
                </div>
                

                </>
            ) : (
                // Actual posts
                posts.map((post, i) => (
                    <div key={post.id || i} className="w-full md:w-[40%] m-2">
                        <Card post={post} />
                    </div>
                ))
            )}
        </div>
    );
}
