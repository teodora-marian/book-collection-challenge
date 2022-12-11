import React, {useContext, useState} from 'react';
import '../App';
import { ThemeContext } from '../Theme';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import BookCollection from './BookCollection';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className='header'>
      <h1>RIA Books Collection</h1>
      <div className='search'>
        <TextField label='Search books...' onChange={inputHandler}/>
      </div>
      {/* <div><BookCollection input={inputText} /></div> */}
      <div className='header-toggle-buttons'>
        <Button variant={theme ==='dark-theme' ? 'outlined' : 'contained'} onClick={() => toggleTheme()}>{theme ==='dark-theme' ? 'light' : 'dark'}</Button>
      </div>
    </div>
  )
}

export default Header