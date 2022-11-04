import React from 'react';
import NameList from './name-list';





function NamePicker({ names, searchValue, shortList, setShortList, setBabies }) {
  const filteredNames = names
    .filter((entry) => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((entry) => !shortList.includes(entry.id));

  const addToList = id => setShortList([...shortList, id]);



  return (
    <div >
      <NameList nameList={filteredNames} onItemClick={addToList} setBabies={setBabies} />
      <hr />

    </div >


  );
}

export default NamePicker;