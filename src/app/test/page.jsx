"use client"
import { useEffect } from 'react';

function LikePage() {
  useEffect(() => {
    const likePost = async () => {
      const postId = 1; // Example postId
      const userId = 1; // Example userId
      const reaction = 'like'; // Example reaction

      try {
        const response = await fetch('/api/like', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postId, userId, reaction }),
        });

        const data = await response.json();
        console.log(data); // Handle the response data as needed
      } catch (error) {
        console.error('Error liking the post:', error);
      }
    };

    likePost();
  }, []);

  return (
    <div>
      <p>Like a post</p>
      {/* Implement UI elements as needed */}
    </div>
  );
}

export default LikePage;