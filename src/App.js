import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
const firebaseConfig = {
  apiKey: "AIzaSyCLg_-YXxgkqGX0BcW9c9HK7rCXyvhjtWM",
  authDomain: "manuelportfolio-e1c0f.firebaseapp.com",
  projectId: "manuelportfolio-e1c0f",
  storageBucket: "manuelportfolio-e1c0f.appspot.com",
  messagingSenderId: "208466801614",
  appId: "1:208466801614:web:c6a8aa55139cf32d22719f",
  measurementId: "G-TKFJX8CR5G"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default App;
