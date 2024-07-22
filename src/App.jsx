import Aos from 'aos'
import './App.css'
import Header from './pages/Header';
import 'animate.css';
import Aboutus from './pages/Aboutus';
import { useTranslation } from 'react-i18next';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import ServiceList from './pages/ServiceList';
import Guarant from './pages/Guarant';
import FAQ from './pages/FAQ';
import Tellus from './pages/Tellus';
import Footer from './pages/Footer';

function App() {
  Aos.init();
  const crntLang = localStorage.getItem("i18nextLng")
    const {t,i18n} = useTranslation()
    const handleChange = (event)=>{
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang)
    }


  return (
    <>
      <Header handleChange={handleChange} crntLang={crntLang} t={t} />
      <Aboutus t={t}/>
      <Contactus t={t} />
      <Services t={t} />
      <ServiceList t={t} />
      <Guarant t={t} />
      <FAQ t={t} />
      <Tellus t={t} />
      <Footer t={t} />
    </>
  )
}

export default App
