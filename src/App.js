// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
// this is used for navigating betweeen pages without reloading
import { BrowserRouter as Router, Routes, Route,HashRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  // this variable is firm name
  let title="Dailynews";
  const[bgMode,changeBgMode]= useState("light");
  // this function will toggle between light and dark
  const setBgMode= ()=>{
        if (bgMode==="light") {
            changeBgMode("dark");
            document.body.style.backgroundColor="#060612";
            
        } else {
            changeBgMode("light");
            document.body.style.backgroundColor="white";
        }
  }
  // this is for progress bar at top of page
  const [progress, setProgress] = useState(0)
  // this function will change progress value
  let changeProgress=(progress)=>{
      setProgress(progress)
  }
  // this is hidden variable from .env file
  let apiKeyVal=process.env.REACT_APP_NEWS_API;
  return (
    <>
    {/* router opening tag */}
    <HashRouter>
      
        <Navbar title={title} setBgMode={setBgMode} bgMode={bgMode}/>
        {/* this is loading bar value that will change in update news function */}
        <LoadingBar
        // this is color for loading bar
        color='#f11946'
        // this is width of loading bar
        height={4}
        // this is value of loading progress
        progress={progress}
        // after loading finished it will set loading to 0
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
      {/* this is routes opening tag */}
            {/* this is route tag based on categories it willo execute  */}
            {/* this is new version it take route and attribute element as not switch which is in older version */}
            {/* this is passing props apikey of newsapi, setloading function for displaying top loading bar,`title of brand name category of news and country*/}
            <Route  exact path ="/" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"general"} key="general"/>}  />
            <Route  exact path ="/general" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"general"} key="general"/>}  />
            <Route  exact path ="/science" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} category={"science"}country={"in"} key="science"/>}  />
            <Route  exact path ="/entertainment" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"entertainment"} key="entertainment"/>}   />
            <Route  exact path ="/sports" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"sports"} key="sports"/>}   />
            <Route  exact path ="/business" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"business"} key="business"/>}   />
            <Route  exact path ="/health" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"health"} key="health"/>}   />
            <Route  exact path ="/technology" element={<Newscomponent apiKey={apiKeyVal} setLoading={changeProgress} title={title} pagesize={6} bgMode={bgMode} country={"in"} category={"technology"} key="technology"/>}   />
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
