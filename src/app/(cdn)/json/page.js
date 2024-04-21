// pages/firstEntry.js

import axios from 'axios';

export default async function FirstEntry( ) {
    const response = await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json');
    const data = response.data;
    const firstEntry = data[0]; // Assuming data is an array
  
  return (
    <div>
      <h1>First Entry</h1>
      <pre>{JSON.stringify(firstEntry, null, 2)}</pre>
    </div>
  );
}

