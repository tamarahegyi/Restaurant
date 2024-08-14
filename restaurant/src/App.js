import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavigationBar from './modules/NavigationBar/NavigationBar.js';
import LandingPage from './modules/LandingPage/LandingPage.js';

function App() {
  return (
<BrowserRouter>
<NavigationBar/>
<Routes>
  <Route path="landingPage" element={<LandingPage/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;

