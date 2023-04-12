import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Title from './components/Title';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css'

function App() {
  const[data, setData] = useState([]);
  const [isDark, setDark] = useState(false);

  const setDarkMode = () => {
    setDark(!isDark);
  }
  
  const API_URL =`https://restcountries.com/v3.1/all`;

  useEffect(()=>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  },[]);

  return (
    <BrowserRouter>
      <div className={isDark ? "App Dark" : "App"}>
      <Title isDark={isDark} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home data={data} isDark={isDark}/>}/>
        <Route path="/detail/:id" element={<Detail data={data} />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
