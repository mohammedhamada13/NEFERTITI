import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './pages/Slider';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <Slider/>
      <Routes>
      
      
      <Route  path='/'   element={<  Home   />} />
      <Route  path='/home'   element={<  Home   />} />
      <Route  path='/contact'   element={<  Contact   />} />
      <Route  path='/about'   element={<  About   />} />
      <Route  path='/services'   element={<  Services   />} />
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
