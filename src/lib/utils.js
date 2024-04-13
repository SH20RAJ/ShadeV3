export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);


export function relativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
  
    const diffMilliseconds = now - date;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
  
    if (diffSeconds < 60) {
      return "just now";
    } else if (diffSeconds < 3600) {
      const minutes = Math.floor(diffSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 86400) {
      const hours = Math.floor(diffSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 604800) {
      const days = Math.floor(diffSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 2592000) {
      const weeks = Math.floor(diffSeconds / 604800);
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(diffSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
  }
  