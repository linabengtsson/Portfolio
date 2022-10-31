import "./App.css"
import "./css/about.css"
import "./css/contact.css"
import "./css/home.css"
import HomeView from "./views/homeView"
import AboutView from "./views/aboutView"
import ContactView from "./views/contactView"
import TopMenu from "./views/topMenu"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <TopMenu />
      <Routes>
            <Route exact path="/" element={<HomeView />}/>
            <Route path="about" element={<AboutView />}/>
            <Route path="contact" element={<ContactView />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
