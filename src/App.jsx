import './App.css'
import Header from './components/header/index';
import About from './components/about/index';
import WebsiteContent from './components/contentMontain/index';
import Exploring from './components/exploring/index';
import Footer from './components/footer/index';

/* Import de Imagens */ 
import Facebook from './assets/img/facebook.png';
import Twitter from './assets/img/twitter.png';
import Instagram from './assets/img/instagram.png';
import Pint from './assets/img/pinterest.png';
import Gmail from './assets/img/gmail.png';
import Youtube from './assets/img/youtube.png';


function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>

      <div className='gridImg content'>
        <div className='card img1'></div>
        <div className='card img2'></div>
        <div className='card img3'></div>
      </div>

      <WebsiteContent/>

      <div className='gridImg content'>
          <div className='card img4'></div>
          <div className='card img5'></div>
      </div>

      <Exploring/>

      <div className='social'>
          <div className='boxSocial'>
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={Pint} alt="" />
            <img src={Gmail} alt="" />
            <img src={Youtube} alt="" />
          </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
