import Aboutus from './components/aboutus';
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Ourteam from './components/ourteam';
import Contactus from './components/contactus';
import Servicesoffered from './components/services';
import Home from './components/home';
import TeamPage from './components/teammember';
import Imageisthis from './components/test2';
import Iit from './components/test2';
import MobNavbar from './components/test2';
import Newnav from './components/newnav';


const Routing = ()=>{
  return (
    <Routes>
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/" element={<Home />} />
      <Route path="/iit" element={<Iit />} />
      <Route path="/ourteam" element={<Ourteam />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/services" element={<Servicesoffered />} />
      <Route path="/teampage" element={<TeamPage />} />
      <Route path="/bgimage" element={<Imageisthis />} />
    </Routes>
  )
}

function App() {
  return (
    <div className='App'>
      <Newnav />
      <BrowserRouter>
        <Routing />    
      </BrowserRouter>
      {/* <img src="./gandhi.png" />   */}
    </div>
  );
}

export default App;
