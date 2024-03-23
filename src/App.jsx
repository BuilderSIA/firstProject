import './App.scss';
import Header from './components/Header';
import useLocalStorage from 'use-local-storage';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import ServiceList from './components/ServiceList';
import Guarant from './components/Guarant';
import FAQ from './components/FAQ';
import TellUs from './components/TellUs';
import Footer from './components/Footer';

function App() {
  const [mode,setMode] = useLocalStorage("mode",false)
  return (
    <div data-theme={mode?"dark":"light"}>
    <Header mode={mode} setMode={setMode}/>
    <Hero/>
    <AboutUs/>
    <ContactUs/>
    <Services/>
    <ServiceList/>
    <Guarant/>
    <FAQ/>
    <TellUs/>
    <Footer/>
    </div>
  )
}

export default App
