import React from 'react'
import { useState } from 'react'
import {MdDarkMode} from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
export default function Title(props) {
  const [isDark, setDark] = useState(props.isDark);

  const setDarkMode = () => {
    setDark(!isDark);
    props.setDarkMode(!isDark);
  };

  return (
      <div className='title'>
        <h2>Where in the World?</h2>
        <button onClick={setDarkMode}>{isDark ? <MdDarkMode/>:<MdOutlineDarkMode/>}</button>
      </div> 
  )
}
