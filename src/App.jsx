import { useState } from 'react';
import LeftSide from './Leftside'
import { ReadingTimeContext } from './main'
import Menu from './Menu'
import RightSide from './RightSide'

export default function App() {
  const [time, setTime] = useState(0);

  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);

  return (
    <ReadingTimeContext.Provider value={{ time, setTime }}>
      <div className="w-5/6 mx-auto">
        <Menu />
        <div className="md:flex ">
          <LeftSide
            bookmarkedBlogs={bookmarkedBlogs}
            setBookmarkedBlogs={setBookmarkedBlogs}
          />
          <RightSide
            bookmarkedBlogs={bookmarkedBlogs}
            setBookmarkedBlogs={setBookmarkedBlogs}
          />
        </div>
      </div>
    </ReadingTimeContext.Provider>
  )
}
