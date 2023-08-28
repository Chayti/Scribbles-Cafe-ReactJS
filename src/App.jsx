import { useState } from 'react';
import LeftSide from './Leftside'
import { ReadingTimeContext } from './main'
import Menu from './Menu'
import RightSide from './RightSide'

export default function App() {
  const [time, setTime] = useState(0);

  return (
    <ReadingTimeContext.Provider value={{ time, setTime }}>
      <div className="w-5/6 mx-auto">
        <Menu />
        <div className="md:flex ">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </ReadingTimeContext.Provider>
  )
}
