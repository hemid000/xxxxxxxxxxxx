// Secondtextsect.jsx
import React from 'react';
import "../../../sass/secondtextsec.scss";

const Secondtextsect = ({ scrollToSection, updateListData,setActiveList }) => {

  const handleClick = (index, listName) => {
    updateListData(index);
    setActiveList(listName);
    scrollToSection(listName);
    console.log(listName,index);

  }
 
  return (
    <div className='secondtotal'>
      <div className="data">
        <ul>
          <li onClick={() => handleClick(1,"Listdata1")}>Saytların hazırlanması</li>
          <div className="line"></div>
          <li onClick={() => handleClick(2,"Listdata2")}>Veb dizayn</li>
          <div className="line"></div>
          <li onClick={() => handleClick(3,"Listdata3")}>Saytların yenilənməsi</li>
          <div className="line"></div>
          <li onClick={() => handleClick(4,"Listdata4")}>Keyfiyyət analizi</li>
        </ul>
      </div>
    </div>
  );
}

export default Secondtextsect;
