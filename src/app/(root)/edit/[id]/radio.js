
const Radio = ({ postmode, setPostmode }) => {
  const handlePostModeChange = (mode) => {
    setPostmode(mode);
  };

  return (
    <div>
      {/* <h3 className="mb-4 font-semibold textd dark:text-white">POST Mode</h3> */}
      <ul className="items-center w-full text-sm font-medium textd textd border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              type="radio"
              id="text-radio"
              checked={postmode === 'text'}
              onChange={() => handlePostModeChange('text')}
            />
            <label htmlFor="text-radio" className="w-full py-3 ms-2 text-sm font-medium textd dark:text-gray-300">Text</label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              type="radio"
              id="image-radio"
              checked={postmode === 'image'}
              onChange={() => handlePostModeChange('image')}
            />
            <label htmlFor="image-radio" className="w-full py-3 ms-2 text-sm font-medium textd dark:text-gray-300">Image</label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              type="radio"
              id="article-radio"
              checked={postmode === 'article'}
              onChange={() => handlePostModeChange('article')}
            />
            <label htmlFor="article-radio" className="w-full py-3 ms-2 text-sm font-medium textd dark:text-gray-300">Article</label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              type="radio"
              id="video-radio"
              checked={postmode === 'video'}
              onChange={() => handlePostModeChange('video')}
            />
            <label htmlFor="video-radio" className="w-full py-3 ms-2 text-sm font-medium textd dark:text-gray-300">Video</label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Radio;