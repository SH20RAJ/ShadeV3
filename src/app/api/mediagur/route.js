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
    console.log("b",base64data);

    // Here, you can use the base64data for your GitHub upload or any other processing
    // console.log('Base64 Data:', base64data);

    const githubUrl = `https://api.github.com/repos/${process.env.ORG_NAME}/${process.env.REPO_NAME}/contents/${fileName}`;

    // GitHub API Headers with Personal Access Token
    const headers = {
      Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    };

    try {
      // Check if file exists
      const response = await axios.get(githubUrl, { headers });
      const sha = response.data.sha;

      // Update file
      const commitMessage = `Update ${fileName}`;
      const commitData = {
        message: commitMessage,
        content: base64data,
        branch: 'main', // Assuming you're working with the main branch
        sha: sha // Include the sha for updating the existing file
      };

      const commitResponse = await axios.put(githubUrl, commitData, { headers });
      console.warn(commitResponse)

      const fileUrl = commitResponse.data.content.download_url;
      const commitUrl = commitResponse.data.commit.html_url;

      // Return uploaded file URL and commit URL
      console.log(commitResponse.data);
      const jsdelivr = `https://cdn.jsdelivr.net/gh/${process.env.ORG_NAME}/${process.env.REPO_NAME}@${commitResponse.data.commit.sha}/${fileName}`;
      return Response.json({ fileurl : jsdelivr, size : commitResponse.data.content.size, fileUrl , commitUrl});

    } catch (error) {
      if (error.response.status === 404) {
        // File doesn't exist, create a new one
        const commitMessage = `Upload ${fileName}`;
        const commitData = {
          message: commitMessage,
          content: base64data,
          branch: 'main', // Assuming you're working with the main branch
        };
  
        const commitResponse = await axios.put(githubUrl, commitData, { headers });
        console.warn(commitResponse)
  
        const fileUrl = commitResponse.data.content.download_url;
        const commitUrl = commitResponse.data.commit.html_url;
  
        // Return uploaded file URL and commit URL
        console.log(commitResponse.data);
        const jsdelivr = `https://cdn.jsdelivr.net/gh/${process.env.ORG_NAME}/${process.env.REPO_NAME}@${commitResponse.data.commit.sha}/${fileName}`;
        return Response.json({ fileurl : jsdelivr, size : commitResponse.data.content.size, fileUrl , commitUrl});
      } else {
        console.error('Error updating file on GitHub:', error.message);
        // Handle other errors
      }
    } 


  } catch (error) {
    console.error('Error handling file:', error.message);
    return Response.json({ error: 'Error handling file' });
  }
}

export { handler as POST };
