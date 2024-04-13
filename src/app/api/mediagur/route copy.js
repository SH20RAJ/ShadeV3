import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false,
  },
};
 async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/uploads'; // Directory to store uploaded files
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Something went wrong' });
    }

    const filePath = files.file.path;
    const fileName = files.file.name;

    const githubUrl = `https://api.github.com/repos/${process.env.ORG_NAME}/${process.env.REPO_NAME}/contents/${fileName}`;

    // Read file as base64
    const fileData = fs.readFileSync(filePath, { encoding: 'base64' });

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
        content: fileData,
        sha: sha,
        branch: 'main', // Assuming you're working with the main branch
      };

      const commitResponse = await axios.put(githubUrl, commitData, { headers });

      const fileUrl = commitResponse.data.content.download_url;
      const commitUrl = commitResponse.data.commit.html_url;

      // Return uploaded file URL and commit URL
      res.status(200).json({ fileUrl, commitUrl });
    } catch (error) {
      console.error('Error uploading file to GitHub:', error.message);
      res.status(500).json({ error: 'Error uploading file to GitHub' });
    } finally {
      // Clean up: delete the uploaded file from the server
      fs.unlinkSync(filePath);
    }
  });
}








export { handler as GET, handler as POST, handler as PUT }