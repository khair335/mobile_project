import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Brand from './pages/Brand/Brand';
import PhoneDetails from './pages/PhoneDetails/PhoneDetails';
import { Toaster } from 'react-hot-toast';



function App() {

  return (
    <div>
       <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} >

        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/brand/:id" index element={<Brand />} />
        <Route path="/:idBrand/:phoneId" index element={<PhoneDetails />} />
      </Routes>
   </div>
  );
}

export default App;
