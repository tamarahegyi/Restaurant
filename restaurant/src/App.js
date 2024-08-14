import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavigationBar from './modules/NavigationBar/NavigationBar.js';

function App() {
  return (
<BrowserRouter>
<NavigationBar/>
<Routes>
</Routes>
</BrowserRouter>
  );
}

export default App;

