import { getClientIp } from 'request-ip';
import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma';



export async function GET(req) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');
  const ipAddress = getClientIp(req);
  console.log(postId, ipAddress);

  if (!postId) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  try {
    // Create a new view record
    await prisma.view.create({
      data: {
        postId: parseInt(postId, 10),
        ipAddress: ipAddress,
      },
    });

    // Increment the view count in the Post table
    await prisma.post.update({
      where: { id: parseInt(postId, 10) },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json({ message: 'View counted' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
