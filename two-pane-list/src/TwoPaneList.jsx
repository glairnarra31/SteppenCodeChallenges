import { useState } from 'react';
import EmptyContent from './components/EmptyContent';
import SidebarMenu from "./components/SidebarMenu"
import TitleContent from './components/TitleContent';

export const TwoPaneList = ({ data = [] }) => {
  const [selectedTitleIndex, setselectedTitleIndex] = useState(null);

  return (
    <div className="container">
      <div className="columns">
        <SidebarMenu titles={data.map((d) => d.title)} onSelectedChanged={setselectedTitleIndex}/>
        {selectedTitleIndex !== null ? <TitleContent contents={data[selectedTitleIndex].content}/> : <EmptyContent />}
      </div>
    </div>
  )
}
