import prisma from "../../../prisma";



export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { content } = req.body;
    console.log("ececedC",req.body.content);

    try {
      // Create the new post in the database
      const newPost = await prisma.post.create({
        data: {
          content,
          authorId: 12, // Ensure authorId is parsed as an integer
        },
      });

      // Send a success response with the new post data
      res.status(201).json({ success: true, message: 'Post created successfully', post: newPost });
    } catch (error) {
      // If there's an error, send an error response
      console.error('Error creating post:', error);
      res.status(500).json({ success: false, message: 'An error occurred while creating the post' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
