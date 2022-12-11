import './App.css';
import BookCollection from './components/BookCollection';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext } from './Theme';
import React, {useContext} from 'react';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header/>
      <BookCollection/>
      <Footer/>  
    </div>
  );
}

export default App
