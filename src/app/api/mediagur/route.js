import { readFile } from 'fs/promises';
import axios from 'axios';



async function handler(req, res, next) {
  try {
    let data = await req.formData();
    console.log(data);
    data = data.get('file');
    let fileName = data.name || "file";
    let bytedata = await data.arrayBuffer();
    let buffer = Buffer.from(bytedata);

    // Convert buffer to base64
    let base64data = buffer.toString('base64');

    // Here, you can use the base64data for your GitHub upload or any other processing
    // console.log('Base64 Data:', base64data);

    const githubUrl = `https://api.github.com/repos/${process.env.ORG_NAME}/${process.env.REPO_NAME}/contents/${fileName}`;

    // GitHub API Headers with Personal Access Token
    const headers = {
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    };

    try {
      // Get current file content if exists
      const response = await axios.get(githubUrl, { headers });
      const sha = response.data.sha;

      // Update file
      const commitMessage = `Upload ${fileName}`;
      const commitData = {
        message: commitMessage,
        content: base64data,
        sha: sha,
        branch: 'main', // Assuming you're working with the main branch
      };

      const commitResponse = await axios.put(githubUrl, commitData, { headers });

      const fileUrl = commitResponse.data.content.download_url;
      const commitUrl = commitResponse.data.commit.html_url;

      // Return uploaded file URL and commit URL
      console.log(commitResponse.data);
      const jsdelivr = `https://cdn.jsdelivr.net/gh/${process.env.ORG_NAME}/${process.env.REPO_NAME}@${commitResponse.data.commit.sha}/${data.name}`;
      return Response.json({ fileurl : jsdelivr, size : commitResponse.data.content.size, fileUrl , commitUrl});

    } catch (error) {
      console.error('Error uploading file to GitHub:', error.message);
      // res.status(500).json({ error: 'Error uploading file to GitHub' });
    } 


  } catch (error) {
    console.error('Error handling file:', error.message);
    return Response.json({ error: 'Error handling file' });
  }
}

export { handler as POST };
