import React from 'react';
import { Fragment, useState } from 'react';
import './App.css';
import NamePicker from './name-picker';
import Search from './search';
import ShortList from './short-list';
import { FaBabyCarriage } from "react-icons/fa";




function App({ names }) {
  const [searchValue, setSearchValue] = useState('');
  const [shortList, setShortList] = useState([]);


  let all = names;
  let boy = names.filter(elem => elem.sex === 'm');
  let girl = names.filter(elem => elem.sex === 'f');
  const [gender, setGender] = useState(all);


  const handleAll = () => setGender(all)
  const handleBoy = () => setGender(boy);
  const handleGirl = () => setGender(girl);



  let alphabeticalBabyNames = names.sort((baby1, baby2) =>
    baby1.name.localeCompare(baby2.name)
  );
  const [babies, setBabies] = useState(alphabeticalBabyNames);


  return (
    <Fragment>
      <div className='first-container'>
        <h2>Baby names:</h2>
        <div className='search'>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />

          <div className="filterButtons">
            <button className="all" onClick={() => handleAll()}><FaBabyCarriage /></button>
            <button className="m" onClick={() => handleBoy()}><FaBabyCarriage /></button>
            <button className="f" onClick={() => handleGirl()}><FaBabyCarriage /></button>

          </div >
        </div>
        <ShortList names={names} shortList={shortList} setShortList={setShortList} />
        <NamePicker names={names} searchValue={searchValue} shortList={shortList} setShortList={setShortList} setBabies={setBabies} babies={babies} gender={gender} setGender={setGender} />


      </div>

    </Fragment>


  );
}

export default App;
