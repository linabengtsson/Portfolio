import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "./css/about.css"
import "./css/contact.css"
import "./css/home.css"
import HomePresenter from "./presenter/homePresenter"
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
            <Route exact path="/" element={<HomePresenter />}/>
            <Route path="about" element={<AboutView />}/>
            <Route path="contact" element={<ContactView />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
