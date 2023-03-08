import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import News from "./pages/News"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/project" element={<Projects/>}/>
        <Route exact path="/News" element={<News/>}/>
      </Routes>
 </Router> 
    </div>
  );
}

export default App;
