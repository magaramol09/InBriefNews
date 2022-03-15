import { useState } from 'react';
import Footer from './componet/Footer';
import Navbar from './componet/Navbar';
import NewsMain from './componet/NewsMain';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  // dark mode  code started

  const [mode, setMode] = useState("light"); // dark mode main state 

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
  }

  // ! search is not working Properly so we will finish it leter 

  //const [searchData , setsearchData]=useState(null)  // dont pass this state // Onchange event
  //const [searchbtn , setSearchbtn]=useState(false) // onClick State
  //const [showdata , setShowdata]=useState(null) //  passing to api 

  // const Btn = ()=>{
  //   setSearchbtn(true);
  //   if (searchbtn===true) {
  //     setShowdata(searchData)
  //     console.log(showdata);
  //   }

  // }

  // const getData =(e)=>{
  //   setsearchData(e.target.value);
  // }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<NewsMain key="home" content="india" />} />
          <Route path="/politics" element={<NewsMain key="politics" content="indian politics" />} />
          <Route path="/stock" element={<NewsMain key="stock" content="indian stock" />} />
          <Route path="/cryptocurrency" element={<NewsMain key="cryptocurrency" content="cryptocurrency" />} />
          <Route path="/ipo" element={<NewsMain key="ipo" content="NSE IPO" />} />
          <Route path="/entertainment" element={<NewsMain key="entertainment" content="indian entertainment" />} />
          <Route path="/tech" element={<NewsMain key="tech" content=" indian technology" />} />
          <Route path="/health" element={<NewsMain key="health" content=" health" />} />
          <Route path="/cricket" element={<NewsMain key="cricket" content=" indian cricket" />} />
          <Route path="/football" element={<NewsMain key="football" content="football" />} />
          <Route path="/Fashion" element={<NewsMain key="Fashion" content=" indian Fashion" />} />
          <Route path="/Business" element={<NewsMain key="Business" content=" indian Business" />} />
          <Route path="/Market" element={<NewsMain key=" Market" content=" indian Market" />} />
          <Route path="/Education" element={<NewsMain key="Education" content="indian Education" />} />
          <Route path="/f1race" element={<NewsMain key="f1 race" content="f1 race" />} />
        </Routes>
        <Footer mode={mode} />
      </Router >
    </>
  );
}
export default App;
