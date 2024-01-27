import './App.css';
import Home from './Components/Home/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Library from './Components/Library/Library.jsx';
import Health from './Components/Health.jsx';
import Work from './Components/Work.jsx';
import Spiritual from './Components/Spiritual.jsx';
import Footer from './Components/Footer.jsx';
import {Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <>
        <NavBar/>
          <div className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/Library' element={<Library />} />
                <Route path='/Health' element={<Health/>} />
                <Route path='/Work' element={<Work/>} />
                <Route path='/Spiritual' element={<Spiritual />} />
            </Routes>
          </div>
        <Footer/>
      </>
    </div>
  );
}

export default App;
