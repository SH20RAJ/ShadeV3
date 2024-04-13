import { readFile } from 'fs/promises';

async function handler(req, res, next) {
  try {
    let data = await req.formData();
    console.log(data);
    data = data.get('file');
    let bytedata = await data.arrayBuffer();
    let buffer = Buffer.from(bytedata);

    // Convert buffer to base64
    let base64data = buffer.toString('base64');

    // Here, you can use the base64data for your GitHub upload or any other processing
    console.log('Base64 Data:', base64data);

    return Response.json({ base64data });
  } catch (error) {
    console.error('Error handling file:', error.message);
    return Response.json({ error: 'Error handling file' });
  }
}

export { handler as POST };
