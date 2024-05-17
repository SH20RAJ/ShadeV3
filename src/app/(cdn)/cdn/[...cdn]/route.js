// src/app/(cdn)/cdn/[...cdn]/route.js

import { NextResponse } from 'next/server';
import getURLfromCommitId from './getURLfromCommitId';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let url = searchParams?.get('url') || "";
  if(searchParams.has('id')){
    const id = searchParams.get('id');
    console.log("ImgID: " + id);
    url = getURLfromCommitId(id);
  }

  if (!url) {
    return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status });
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image')) {
      return NextResponse.json({ error: 'URL does not point to an image' }, { status: 400 });
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': imageBuffer.byteLength.toString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
