import './App.css';
import Blogs from './components/navbar/blogs/Blogs';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>

      <div className="main-container flex text-center gap-4">
        <div className="left-container w-[70%] border border-amber-400">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] border border-amber-700">
          <h1>Reading Time: 0</h1>
          <h1>Bookmarked Count: 0</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
