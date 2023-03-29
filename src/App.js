import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import News from "./pages/News"
import BlogReno from "./pages/BlogReno"
import BlogCost from  "./pages/BlogCost"
import BlogTrust from  "./pages/BlogTrust"
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
        <Route exact path="/BlogReno" element={<BlogReno/>}/>
        <Route exact path="/BlogCost" element={<BlogCost/>}/>
        <Route exact path="/BlogTrust" element={<BlogTrust/>}/>
      </Routes>
 </Router> 
    </div>
  );
}

export default App;
