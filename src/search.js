import React, { useEffect, useRef } from "react";



function Search({ searchValue, setSearchValue }) {

  const inputRef = useRef();
  // console.log({ inputRef })
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  return (

    <input className='search' type='text' placeholder="Search for a name..." value={searchValue} onChange={handleChange} ref={inputRef} />




  );
}

export default Search;