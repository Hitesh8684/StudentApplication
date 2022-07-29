import logo from './logo.svg';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import './App.css';
import Student from './Student';
import Classes from './Classes';
import Search from './Search';

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home stat={true}/>}/>
    <Route exact path="/addStudent" element={<Student/>}/>
    <Route exact path="/class" element={<Classes/>}/>
    <Route exact path="/search" element={<Search/>}/>

    

    
    </Routes>
  </Router>
  );
}

export default App;
