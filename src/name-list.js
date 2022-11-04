import React from "react";
// import { useState } from "React";

function NameList({ nameList, onItemClick }) {
  return (
    <div >
      <ul className='second-container'>


        {nameList.map((entry) => (
          <li className={entry.sex} key={entry.id} >

            <button
              id='item'
              onClick={() => onItemClick(entry.id)}
              style={{
                backgroundColor: entry.sex === 'f' ? '#F56476' : '#008DD5',
                color: entry.sex === 'f' ? '#600610' : '#00293D'
              }}>{entry.name}
            </button>

          </li>


        ))}

      </ul>

    </div>

  );
}

export default NameList;

