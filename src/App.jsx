import { useState } from 'react';
import './App.css';
import Blogs from './components/navbar/blogs/Blogs';
import Navbar from './components/navbar/Navbar';
import Bookmark from './components/bookmarked/Bookmark';

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = blogData => {
    setBookMarked([...bookMarked, blogData]);
  };

  const handleMarkAsRead = time => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
  };

  // console.log(bookMarked);

  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>

      <div className="main-container flex text-center gap-4 mt-5">
        <div className="left-container w-[70%] bg-gray-100 rounded-2xl">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] bg-cyan-50 rounded-2xl">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmarked Count: {bookMarked.length}</h1>
          {bookMarked.map(marked => (
            <Bookmark key={marked.id} marked={marked}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
