import './App.css';
import Contatct from './Components/Contatct';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Work from './Components/Work';
import Work2 from './Components/Work2';
import Work3 from './Components/Work3';
//import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Work/>
      <Work2/>
      <Work3/>
      <Service/>
      <Testimonials/>
      <Contatct/>
    </div>
  );
}

export default App;
