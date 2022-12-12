import React, {useContext} from 'react';
import '../App';
import { ThemeContext } from '../Theme';
import Button from '@mui/material/Button';


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className='header'>
      <h1>RIA Books Collection</h1>
      
      <div className='header-toggle-buttons'>
        <Button variant={theme ==='dark-theme' ? 'outlined' : 'contained'} onClick={() => toggleTheme()}>{theme ==='dark-theme' ? 'light' : 'dark'}</Button>
      </div>
    </div>
  )
}

export default Header