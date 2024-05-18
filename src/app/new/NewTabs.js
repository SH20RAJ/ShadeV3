"use client"
import { useState, useEffect } from 'react';
import { ImageUp, Newspaper, PlayCircleIcon, PodcastIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NewTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname); // Update the active tab when the path changes
  }, [pathname]);

  const getTabClass = (path) => {
    return activeTab === path
      ? 'inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group'
      : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group';
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <Link href="/new" className={getTabClass('/new')} onClick={() => setActiveTab('/new')}>
            <PodcastIcon className="h-4 w-4 mx-2" />
            Post
          </Link>
        </li>
        <li className="me-2">
          <Link href="/new/image" className={getTabClass('/new/image')} onClick={() => setActiveTab('/new/image')}>
            <ImageUp className="h-4 w-4 mx-2" />
            Image
          </Link>
        </li>
        <li className="me-2">
          <Link href="/new/video" className={getTabClass('/new/video')} onClick={() => setActiveTab('/new/video')}>
            <PlayCircleIcon className="h-4 w-4 mx-2" />
            Video
          </Link>
        </li>
        <li className="me-2">
          <Link href="/new/article" className={getTabClass('/new/article')} onClick={() => setActiveTab('/new/article')}>
            <Newspaper className="h-4 w-4 mx-2" />
            Article
          </Link>
        </li>
      </ul>
    </div>
  );
}
