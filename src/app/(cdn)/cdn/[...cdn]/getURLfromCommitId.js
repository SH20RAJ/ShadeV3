export default async function getURLfromCommitId(id) {
    try {
        // Construct the GitHub API URL for fetching the commit details
        const searchUrl = `https://api.github.com/search/commits?q=hash:${id}`;
        console.log("SeachURL: " + searchUrl);
        // Fetch the search results to get the commit URL
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        
        // Extract the commit URL from the search results
        const commitUrl = searchData.items[0].url;
        
        // // Fetch the commit details to get the details of the files
        // const commitResponse = await fetch(commitUrl);
        // const commitData = await commitResponse.json();
        
        // // Extract the raw URL of the first file from the commit details
        // const fileUrl = commitData.files[0].raw_url;
        
        // Return the raw URL of the file
        return await getRawFileUrl(commitUrl);
    } catch (error) {
        console.error("An error occurred:", error);
        // Return a default URL or handle the error as needed
        return "https://example.com/default.jpg";
    }
}



export async function getRawFileUrl(commitUrl) {
    try {
        const commitHash = commitUrl.split('/').pop();
        const repoPath = commitUrl.split('/commit')[0].replace('https://github.com/', '');

        const apiUrl = `https://api.github.com/repos/${repoPath}/commits/${commitHash}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch commit data');
        }

        const commitData = await response.json();
        if (commitData.files && commitData.files.length > 0) {
            const filePath = commitData.files[0].filename; // Assuming the commit has only one file
            return `https://raw.githubusercontent.com/${repoPath}/${commitHash}/${filePath}`;
        } else {
            throw new Error('No files found in this commit');
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
