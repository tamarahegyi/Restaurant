import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavigationBar from './modules/NavigationBar/NavigationBar.js';
import LandingPage from './modules/LandingPage/LandingPage.js';
import AboutUs from './modules/AboutUs/AboutUs.js';
import ContactUs from './modules/ContactUs/ContactUs.js';
import SignUp from './modules/SignUp/SignUp.js';


function App() {
  return (
<BrowserRouter>
<NavigationBar/>
<Routes>
  <Route path="/" element={<LandingPage/>}/>
  <Route path="/landingPage" element={<LandingPage/>}/>
  <Route path="/aboutUs" element={<AboutUs/>}/>
  <Route path="/ContactUs" element={<ContactUs/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;

