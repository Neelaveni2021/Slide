import React , {Children} from 'react'
import First from './Components/First'
import Heading from './Components/Heading';
import Paragraph from './Components/Paragraph'
import ClassNames from './Components/Buttons'
import RightButton from './Components/RightButtons';

function App() {
  return (
    <>
    <div>
    <First />
    <Heading />
    </div>
   <div>
   <Paragraph />
    </div>
    <ClassNames />
    <div>
      <RightButton />
    </div>
    </>
  )
}

export default App;
