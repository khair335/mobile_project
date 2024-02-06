import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Brand from './pages/Brand/Brand';
import PhoneDetails from './pages/PhoneDetails/PhoneDetails';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} >

        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/brand/:id" index element={<Brand />} />
        <Route path="/brand/:id/:phoneId" index element={<PhoneDetails />} />
      </Routes>
   </div>
  );
}

export default App;
